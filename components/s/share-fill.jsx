import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exm28zjag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exm28zjag"/>`,
		"fallback": "mage:share-fill",
	});
}

export default Component;
