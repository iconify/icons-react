import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te7bb6ppf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="te7bb6ppf"/>`,
		"fallback": "iconoir:vials-solid",
	});
}

export default Component;
