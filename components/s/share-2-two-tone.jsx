import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lzkyqsb1b.css';
import '../../css/v/vexzqqb8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lzkyqsb1b"/><path class="vexzqqb8r"/></g>`,
		"fallback": "keyline-icons:share-2-two-tone",
	});
}

export default Component;
