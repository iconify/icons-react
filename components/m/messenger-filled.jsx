import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pybkn4b-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pybkn4b-o"/>`,
		"fallback": "griddy-icons:messenger-filled",
	});
}

export default Component;
