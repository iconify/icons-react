import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t313n7boe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t313n7boe"/>`,
		"fallback": "noviair-light:parking",
	});
}

export default Component;
