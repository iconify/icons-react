import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/b/bnipcdcfx.css';
import '../../css/y/yyxigpbom.css';
import '../../css/j/j_71fjx8n.css';
import '../../css/c/chjhz7bze.css';
import '../../css/h/h30by4xle.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="bnipcdcfx"/><path class="yyxigpbom"/><path class="j_71fjx8n"/><path class="chjhz7bze"/><circle class="h30by4xle"/></g>`,
		"fallback": "icon-park:led-diode",
	});
}

export default Component;
