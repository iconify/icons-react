import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or11ckbae.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or11ckbae"/>`,
		"fallback": "si-glyph:safe-pin",
	});
}

export default Component;
