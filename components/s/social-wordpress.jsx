import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbyuj8lph.css';
import '../../css/e/eldvjb07a.css';
import '../../css/n/n-qmf6rfn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbyuj8lph"/><path class="eldvjb07a"/><path class="n-qmf6rfn"/>`,
		"fallback": "ion:social-wordpress",
	});
}

export default Component;
