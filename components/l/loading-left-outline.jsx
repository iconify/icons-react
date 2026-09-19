import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nzacwof9r.css';
import '../../css/o/o7kac3b2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="loadgin-left-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="nzacwof9r"/><path class="o7kac3b2m"/></g></g>`,
		"fallback": "cuida:loading-left-outline",
	});
}

export default Component;
