import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc3_pqumv.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc3_pqumv"/>`,
		"fallback": "si-glyph:square-delicious",
	});
}

export default Component;
