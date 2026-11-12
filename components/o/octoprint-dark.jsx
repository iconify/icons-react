import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrul9j3dz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrul9j3dz"/>`,
		"fallback": "selfhst:octoprint-dark",
	});
}

export default Component;
