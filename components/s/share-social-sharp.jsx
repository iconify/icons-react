import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrea60bar.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrea60bar"/>`,
		"fallback": "famicons:share-social-sharp",
	});
}

export default Component;
