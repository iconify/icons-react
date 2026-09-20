import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/przzuwbpc.css';
import '../../css/n/n_1kk4vwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="przzuwbpc"/><path class="n_1kk4vwo"/></g>`,
		"fallback": "lucide:printer-x",
	});
}

export default Component;
