import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phz5pab0c.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phz5pab0c"/>`,
		"fallback": "wi:raindrops",
	});
}

export default Component;
