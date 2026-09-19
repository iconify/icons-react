import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i23tf7bch.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i23tf7bch"/>`,
		"fallback": "dashicons:lock",
	});
}

export default Component;
