import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c44hfibhx.css';
import '../../css/c/cr_saabkz.css';
import '../../css/f/foe0t-bls.css';
import '../../css/d/dllpr8t9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c44hfibhx"/><path class="cr_saabkz"/><circle transform="rotate(-180 11 11)" class="foe0t-bls"/><path class="dllpr8t9z"/></g>`,
		"fallback": "iconamoon:pen-duotone",
	});
}

export default Component;
