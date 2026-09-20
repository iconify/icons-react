import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/o/oh8e_xeml.css';
import '../../css/o/o2hau-8pn.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="oh8e_xeml"/><path class="o2hau-8pn"/></g>`,
		"fallback": "marketeq:key-7",
	});
}

export default Component;
