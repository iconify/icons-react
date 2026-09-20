import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq-d4ab0e.css';
import '../../css/v/vxe7b0b2d.css';
import '../../css/t/twij58b_v.css';
import '../../css/l/l79kylebl.css';
import '../../css/u/uy0hx2qfx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iq-d4ab0e"/><path class="vxe7b0b2d"/><path class="twij58b_v"/><path class="l79kylebl"/><path class="uy0hx2qfx"/>`,
		"fallback": "material-icon-theme:shellcheck-light",
	});
}

export default Component;
