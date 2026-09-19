import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ul-m_mdjs.css';
import '../../css/e/ea0acz-ju.css';
import '../../css/u/u6zkyfsky.css';
import '../../css/v/viuo68bqo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ul-m_mdjs"/><path clip-rule="evenodd" class="ea0acz-ju"/><path class="u6zkyfsky"/><path class="viuo68bqo"/></g>`,
		"fallback": "pepicons:syringe-print",
	});
}

export default Component;
