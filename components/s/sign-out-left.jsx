import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/cb06xza_b.css';
import '../../css/b/b7e-wzk2x.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="cb06xza_b"/><path class="b7e-wzk2x"/></g>`,
		"fallback": "marketeq:sign-out-left",
	});
}

export default Component;
