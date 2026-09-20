import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3h7ttben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3h7ttben"/>`,
		"fallback": "streamline-sharp:share-code",
	});
}

export default Component;
