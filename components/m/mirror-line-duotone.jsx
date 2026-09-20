import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/osuf_jq5d.css';
import '../../css/n/n1rg9dbqj.css';
import '../../css/f/f_2ri90nz.css';
import '../../css/p/pz8x_ibqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="osuf_jq5d"/><path class="n1rg9dbqj"/><path class="f_2ri90nz"/><path class="pz8x_ibqm"/></g>`,
		"fallback": "solar:mirror-line-duotone",
	});
}

export default Component;
