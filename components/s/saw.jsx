import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxyxo_byb.css';

const viewBox = {"width":16,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxyxo_byb"/>`,
		"fallback": "si-glyph:saw",
	});
}

export default Component;
