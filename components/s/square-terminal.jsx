import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/b/b2s-rtbbj.css';
import '../../css/y/yu3no1o6h.css';
import '../../css/t/tj75_kssw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="b2s-rtbbj"/><path class="yu3no1o6h"/><path class="tj75_kssw"/></g>`,
		"fallback": "matita:square-terminal",
	});
}

export default Component;
