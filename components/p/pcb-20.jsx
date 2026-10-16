import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-e81vb3y.css';
import '../../css/n/nlgovibwp.css';
import '../../css/e/ek-1xpvww.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-e81vb3y"/><path class="nlgovibwp"/><path class="ek-1xpvww"/>`,
		"fallback": "energy-icons:pcb-20",
	});
}

export default Component;
