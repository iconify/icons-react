import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npsjjqbke.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npsjjqbke"/>`,
		"fallback": "picon:reddit",
	});
}

export default Component;
