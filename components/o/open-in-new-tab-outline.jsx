import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c70_fn3nn.css';
import '../../css/k/kij-g2bws.css';
import '../../css/q/qvt3ffkzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="open-in-new-tab-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="c70_fn3nn"/><path class="kij-g2bws"/><path class="qvt3ffkzs"/></g></g>`,
		"fallback": "cuida:open-in-new-tab-outline",
	});
}

export default Component;
