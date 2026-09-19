import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqtuv14sk.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqtuv14sk"/>`,
		"fallback": "si-glyph:suitcase",
	});
}

export default Component;
