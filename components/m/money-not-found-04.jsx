import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/ezi5a8b1n.css';
import '../../css/n/nfti56wmf.css';
import '../../css/p/pbdi6_6bs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ezi5a8b1n"/><path class="nfti56wmf"/><path class="pbdi6_6bs"/></g>`,
		"fallback": "hugeicons:money-not-found-04",
	});
}

export default Component;
