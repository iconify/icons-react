import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/t/tp-9_4bnw.css';
import '../../css/l/lk0790qnt.css';
import '../../css/c/cnj4nbc1z.css';
import '../../css/a/a5okeqbkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="tp-9_4bnw"/><path class="lk0790qnt"/><path class="cnj4nbc1z"/><path class="a5okeqbkx"/></g>`,
		"fallback": "matita:scissors",
	});
}

export default Component;
