import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtpg_fbri.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtpg_fbri"/>`,
		"fallback": "ion:ios-cloud",
	});
}

export default Component;
