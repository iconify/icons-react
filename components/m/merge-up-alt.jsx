import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l83413rhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l83413rhl"/>`,
		"fallback": "griddy-icons:merge-up-alt",
	});
}

export default Component;
