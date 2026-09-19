import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urlr-ggas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urlr-ggas"/>`,
		"fallback": "hugeicons:share-04",
	});
}

export default Component;
