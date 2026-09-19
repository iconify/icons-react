import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttbm51bow.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttbm51bow"/>`,
		"fallback": "f7:rectangle-grid-2x2",
	});
}

export default Component;
