import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1ox-0v_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o1ox-0v_r"/>`,
		"fallback": "griddy-icons:python",
	});
}

export default Component;
