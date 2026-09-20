import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1sg6xboq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1sg6xboq"/>`,
		"fallback": "simple-icons:polymerproject",
	});
}

export default Component;
