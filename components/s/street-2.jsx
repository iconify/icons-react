import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq-j7ccmt.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq-j7ccmt"/>`,
		"fallback": "si-glyph:street-2",
	});
}

export default Component;
