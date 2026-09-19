import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl04g7bka.css';
import '../../css/u/uffvvac3n.css';
import '../../css/z/ze1765b5g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl04g7bka"/><path class="uffvvac3n"/><path class="ze1765b5g"/>`,
		"fallback": "carbon:version",
	});
}

export default Component;
