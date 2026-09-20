import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uook6_bpj.css';
import '../../css/l/lyxymkb3d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="uook6_bpj"/><circle class="lyxymkb3d"/></g>`,
		"fallback": "streamline:interface-edit-view-eye-eyeball-open-view",
	});
}

export default Component;
