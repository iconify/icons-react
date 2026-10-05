import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/qr4j9nf2v.css';
import '../../css/w/w-p88obja.css';
import '../../css/n/n2mgyywxx.css';
import '../../css/h/hxgw5ab5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="qr4j9nf2v"/><path class="w-p88obja"/><path class="n2mgyywxx"/><path class="hxgw5ab5p"/></g>`,
		"fallback": "matita:underline",
	});
}

export default Component;
