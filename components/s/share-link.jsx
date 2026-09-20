import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep_htdb2t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep_htdb2t"/>`,
		"fallback": "streamline:share-link",
	});
}

export default Component;
