import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w7bvc3bvm.css';
import '../../css/j/j2_0o_bfm.css';
import '../../css/t/txzg8cc3a.css';
import '../../css/o/odvy-rh_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w7bvc3bvm"/><path class="j2_0o_bfm"/><ellipse transform="rotate(90 12 13.08)" class="txzg8cc3a"/><path class="odvy-rh_k"/></g>`,
		"fallback": "andrsrxn:magic-hat",
	});
}

export default Component;
