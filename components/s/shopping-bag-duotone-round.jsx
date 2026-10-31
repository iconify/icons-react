import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sb2v8ybxo.css';
import '../../css/q/qvg1frb6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sb2v8ybxo"/><path class="qvg1frb6n"/></g>`,
		"fallback": "coolicons:shopping-bag-duotone-round",
	});
}

export default Component;
