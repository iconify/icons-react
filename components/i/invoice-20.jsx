import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re0n-jb1b.css';
import '../../css/m/myvzpbcde.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re0n-jb1b"/><path class="myvzpbcde"/>`,
		"fallback": "energy-icons:invoice-20",
	});
}

export default Component;
