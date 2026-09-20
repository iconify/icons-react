import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j9cec615c.css';
import '../../css/u/u4tagwsoe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="j9cec615c"/><path class="u4tagwsoe"/></g>`,
		"fallback": "streamline:interface-edit-layer-add-2-layer-add-design-plus-layers-square-box",
	});
}

export default Component;
