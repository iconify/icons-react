import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juoeht0qf.css';

const viewBox = {"width":922.943,"height":995.383};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juoeht0qf"/>`,
		"fallback": "brandico:picasa",
	});
}

export default Component;
