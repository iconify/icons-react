import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frffk_bxq.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frffk_bxq"/>`,
		"fallback": "si-glyph:share-1",
	});
}

export default Component;
