import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/puzwzylem.css';
import '../../css/t/tk0yztb4f.css';
import '../../css/z/z-pb6vbbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="puzwzylem"/><path class="tk0yztb4f"/><path class="z-pb6vbbs"/></g>`,
		"fallback": "hugeicons:square-lock-check-01",
	});
}

export default Component;
