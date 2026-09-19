import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2gnuus1q.css';
import '../../css/u/uvu1bzkib.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2gnuus1q"/><path class="uvu1bzkib"/>`,
		"fallback": "devicon:swift",
	});
}

export default Component;
