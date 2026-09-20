import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/du3f6c1ap.css';
import '../../css/q/qx3vz8bng.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="du3f6c1ap"/><path class="qx3vz8bng"/></g>`,
		"fallback": "streamline:interface-edit-brush-3-brush-color-colors-design-paint-painting-roller-rolling",
	});
}

export default Component;
