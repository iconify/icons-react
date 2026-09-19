import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey-b92b5c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ey-b92b5c"/>`,
		"fallback": "famicons:share-sharp",
	});
}

export default Component;
