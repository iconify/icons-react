import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o5fhfcboe.css';
import '../../css/q/q3fxoyena.css';
import '../../css/t/t869bfbfu.css';
import '../../css/p/pxlcabbtj.css';
import '../../css/o/o7zwehbsl.css';
import '../../css/h/h6xqfzbiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o5fhfcboe"/><path class="q3fxoyena"/><path class="t869bfbfu"/><path class="pxlcabbtj"/><path class="o7zwehbsl"/><path class="h6xqfzbiz"/></g>`,
		"fallback": "solar:notebook-bookmark-linear",
	});
}

export default Component;
