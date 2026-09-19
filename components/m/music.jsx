import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y78v_dbew.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y78v_dbew"/>`,
		"fallback": "si-glyph:music",
	});
}

export default Component;
