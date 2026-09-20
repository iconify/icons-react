import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngjzxub7r.css';
import '../../css/j/j3ukne2vb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngjzxub7r"/><path class="j3ukne2vb"/>`,
		"fallback": "roentgen:lattice-guyed-light-left-light-right",
	});
}

export default Component;
