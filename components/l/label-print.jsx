import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/sfubw46ew.css';
import '../../css/x/xl7_gdfrs.css';
import '../../css/i/iljijccvp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="sfubw46ew"/><path class="xl7_gdfrs"/><circle transform="rotate(-45 6.95 7.38)" class="iljijccvp"/></g>`,
		"fallback": "pepicons:label-print",
	});
}

export default Component;
