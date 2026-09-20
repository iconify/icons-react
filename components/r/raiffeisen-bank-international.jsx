import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pya87gw1z.css';
import '../../css/n/n3i7v162d.css';

const viewBox = {"width":316.938,"height":88.999,"left":-2.519,"top":-2.519};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pya87gw1z"/><path class="n3i7v162d"/>`,
		"fallback": "thesvg-color:raiffeisen-bank-international",
	});
}

export default Component;
