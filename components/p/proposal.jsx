import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of117qg0z.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of117qg0z"/>`,
		"fallback": "picon:proposal",
	});
}

export default Component;
