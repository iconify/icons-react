import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f69k5ob-g.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f69k5ob-g"/>`,
		"fallback": "si-glyph:movie-projector",
	});
}

export default Component;
