import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4uk9ab4l.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4uk9ab4l"/>`,
		"fallback": "si-glyph:signal-3",
	});
}

export default Component;
