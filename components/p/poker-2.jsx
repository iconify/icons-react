import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m59ry468b.css';

const viewBox = {"width":16,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m59ry468b"/>`,
		"fallback": "si-glyph:poker-2",
	});
}

export default Component;
