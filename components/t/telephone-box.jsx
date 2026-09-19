import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxn3dhv8k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxn3dhv8k"/>`,
		"fallback": "si-glyph:telephone-box",
	});
}

export default Component;
