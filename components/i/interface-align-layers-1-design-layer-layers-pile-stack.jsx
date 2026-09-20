import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3xbb8-vd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3xbb8-vd"/>`,
		"fallback": "streamline:interface-align-layers-1-design-layer-layers-pile-stack",
	});
}

export default Component;
