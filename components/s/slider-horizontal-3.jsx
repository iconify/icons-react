import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwlopty2a.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwlopty2a"/>`,
		"fallback": "f7:slider-horizontal-3",
	});
}

export default Component;
