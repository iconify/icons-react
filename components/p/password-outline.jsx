import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bm8u3rb-m.css';
import '../../css/z/zviecfb4g.css';
import '../../css/d/dcgw77bis.css';
import '../../css/c/ck7asmbky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="bm8u3rb-m"/><circle class="zviecfb4g"/><circle class="dcgw77bis"/><circle class="ck7asmbky"/></g>`,
		"fallback": "bitcoin-icons:password-outline",
	});
}

export default Component;
