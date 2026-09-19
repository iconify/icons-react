import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kktn4_nwn.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kktn4_nwn"/>`,
		"fallback": "si-glyph:share-5",
	});
}

export default Component;
