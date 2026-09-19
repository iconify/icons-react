import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ihqvv61nw.css';
import '../../css/e/evhc4ehqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="trending-up-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="ihqvv61nw"/><path class="evhc4ehqx"/></g></g>`,
		"fallback": "cuida:trending-up-outline",
	});
}

export default Component;
