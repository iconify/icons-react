import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f0q8vobjd.css';
import '../../css/p/pqg7c4b2k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f0q8vobjd"/><path class="pqg7c4b2k"/></g>`,
		"fallback": "streamline-color:logout-1",
	});
}

export default Component;
