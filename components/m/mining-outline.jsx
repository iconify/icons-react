import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m1lic7bnl.css';
import '../../css/u/u86jnr_ud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="m1lic7bnl"/><path class="u86jnr_ud"/></g>`,
		"fallback": "bitcoin-icons:mining-outline",
	});
}

export default Component;
