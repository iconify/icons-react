import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4hayrw6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b4hayrw6z"/>`,
		"fallback": "griddy-icons:temperature-fahrenheit-filled",
	});
}

export default Component;
