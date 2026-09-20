import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zyz40f3pg.css';
import '../../css/p/pnav-achm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zyz40f3pg"/><path class="pnav-achm"/></g>`,
		"fallback": "keyline-icons:wallet-two-tone",
	});
}

export default Component;
