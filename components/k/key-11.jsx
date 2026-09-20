import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/o/oh8e_xeml.css';
import '../../css/b/b-ly5yb_d.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="oh8e_xeml"/><path class="b-ly5yb_d"/></g>`,
		"fallback": "marketeq:key-11",
	});
}

export default Component;
