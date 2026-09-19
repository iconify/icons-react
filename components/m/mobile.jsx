import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lfj-bmd.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3lfj-bmd"/>`,
		"fallback": "si-glyph:mobile",
	});
}

export default Component;
