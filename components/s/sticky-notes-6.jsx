import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/m/m03j44bzn.css';
import '../../css/g/glvsvvb8w.css';
import '../../css/w/we-rlobyj.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="m03j44bzn"/><path class="glvsvvb8w"/><path class="we-rlobyj"/></g>`,
		"fallback": "marketeq:sticky-notes-6",
	});
}

export default Component;
