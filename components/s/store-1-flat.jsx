import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fo-32ebci.css';
import '../../css/t/ttngxubar.css';
import '../../css/d/d9_o2bcdy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fo-32ebci"/><path class="ttngxubar"/><path clip-rule="evenodd" class="d9_o2bcdy"/></g>`,
		"fallback": "streamline-flex-color:store-1-flat",
	});
}

export default Component;
