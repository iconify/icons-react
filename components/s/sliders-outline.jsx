import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zbehsk69m.css';
import '../../css/e/evwpmfbcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sliders-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="zbehsk69m"/><path class="evwpmfbcj"/></g></g>`,
		"fallback": "cuida:sliders-outline",
	});
}

export default Component;
