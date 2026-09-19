import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzvbbw4ob.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzvbbw4ob"/>`,
		"fallback": "si-glyph:podium",
	});
}

export default Component;
