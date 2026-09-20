import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/k80h-mg4v.css';
import '../../css/e/ex0uzresb.css';
import '../../css/h/hl39ux13r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="k80h-mg4v"/><rect transform="rotate(180 7.75 3.5)" class="ex0uzresb"/><rect transform="rotate(180 5.75 10.5)" class="hl39ux13r"/></g>`,
		"fallback": "streamline:interface-align-horizontal-right-align-design-right",
	});
}

export default Component;
