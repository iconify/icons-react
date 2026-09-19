import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muji8tb6h.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muji8tb6h"/>`,
		"fallback": "si-glyph:wall",
	});
}

export default Component;
