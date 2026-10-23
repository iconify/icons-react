import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waa-u4n5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="waa-u4n5a"/>`,
		"fallback": "vadivam:square-pause",
	});
}

export default Component;
