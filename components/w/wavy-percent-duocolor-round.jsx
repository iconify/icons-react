import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bupccj7fl.css';
import '../../css/y/yfhcqibox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bupccj7fl"/><path class="yfhcqibox"/></g>`,
		"fallback": "coolicons:wavy-percent-duocolor-round",
	});
}

export default Component;
