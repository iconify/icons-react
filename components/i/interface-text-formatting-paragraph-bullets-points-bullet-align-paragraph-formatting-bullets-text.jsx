import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bddablbli.css';
import '../../css/v/v3wa-j3pp.css';
import '../../css/c/cya3py0hc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="bddablbli"/><rect transform="rotate(-90 3 3.5)" class="v3wa-j3pp"/><rect transform="rotate(-90 3 10.5)" class="cya3py0hc"/></g>`,
		"fallback": "streamline:interface-text-formatting-paragraph-bullets-points-bullet-align-paragraph-formatting-bullets-text",
	});
}

export default Component;
