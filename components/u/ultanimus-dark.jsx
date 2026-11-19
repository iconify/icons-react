import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxi2z2bbm.css';
import '../../css/n/nlc3y1j7j.css';

const viewBox = {"width":18,"height":20,"left":3,"top":2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxi2z2bbm"/><circle class="nlc3y1j7j"/>`,
		"fallback": "thesvg-color:ultanimus-dark",
	});
}

export default Component;
