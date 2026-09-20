import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow0e6s8yt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow0e6s8yt"/>`,
		"fallback": "selfhst:passbolt-dark",
	});
}

export default Component;
