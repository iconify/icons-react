import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/ef9qsdb7i.css';
import '../../css/j/j0m5s5bjl.css';
import '../../css/z/zw2zbqbht.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="ef9qsdb7i"/><path class="j0m5s5bjl"/><path class="zw2zbqbht"/></g>`,
		"fallback": "marketeq:microphone-stand",
	});
}

export default Component;
