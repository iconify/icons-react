import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4w0tp9te.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4w0tp9te"/>`,
		"fallback": "bi:magnet",
	});
}

export default Component;
