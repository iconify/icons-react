import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3qu_cu4p.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3qu_cu4p"/>`,
		"fallback": "whh:listalt",
	});
}

export default Component;
