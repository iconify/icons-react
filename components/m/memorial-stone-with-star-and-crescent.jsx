import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr02q8bnz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr02q8bnz"/>`,
		"fallback": "pinhead:memorial-stone-with-star-and-crescent",
	});
}

export default Component;
