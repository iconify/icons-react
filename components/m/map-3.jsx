import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt0o8jbec.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt0o8jbec"/>`,
		"fallback": "si-glyph:map-3",
	});
}

export default Component;
