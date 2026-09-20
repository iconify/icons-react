import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klwfdlb9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klwfdlb9h"/>`,
		"fallback": "simple-icons:ocaml",
	});
}

export default Component;
