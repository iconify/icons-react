import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/or5gfliir.css';
import '../../css/a/aibvjofbc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="or5gfliir"/><path class="aibvjofbc"/></g>`,
		"fallback": "streamline-flex:shipping-box-2",
	});
}

export default Component;
