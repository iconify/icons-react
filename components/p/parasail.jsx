import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k2c5b0bpi.css';
import '../../css/t/tx67j0bgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="k2c5b0bpi"/><path clip-rule="evenodd" class="tx67j0bgp"/></g>`,
		"fallback": "thesvg:parasail",
	});
}

export default Component;
