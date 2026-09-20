import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/g/g23qn3bli.css';
import '../../css/i/imstvac3c.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="g23qn3bli"/><path class="imstvac3c"/></g>`,
		"fallback": "marketeq:parking-square",
	});
}

export default Component;
