import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghad5nk0v.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghad5nk0v"/>`,
		"fallback": "f7:money-rubl",
	});
}

export default Component;
