import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phbn-6bfu.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phbn-6bfu"/>`,
		"fallback": "si-glyph:triangle-down",
	});
}

export default Component;
