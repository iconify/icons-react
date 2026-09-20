import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5o7rqbzb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5o7rqbzb"/>`,
		"fallback": "pinhead:sayana-press",
	});
}

export default Component;
