import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofg7ycc6f.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofg7ycc6f"/>`,
		"fallback": "si-glyph:ribbon",
	});
}

export default Component;
