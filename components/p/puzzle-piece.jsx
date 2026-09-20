import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmae0kb8o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmae0kb8o"/>`,
		"fallback": "pinhead:puzzle-piece",
	});
}

export default Component;
