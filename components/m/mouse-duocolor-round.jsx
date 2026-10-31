import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a4f92acjz.css';
import '../../css/p/pyjtflbpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a4f92acjz"/><path class="pyjtflbpf"/></g>`,
		"fallback": "coolicons:mouse-duocolor-round",
	});
}

export default Component;
