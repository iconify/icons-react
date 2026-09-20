import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et4zv774r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="et4zv774r"/>`,
		"fallback": "reicon:refresh",
	});
}

export default Component;
