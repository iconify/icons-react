import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg9qh-kkg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg9qh-kkg"/>`,
		"fallback": "selfhst:nyt-spelling-bee-dark",
	});
}

export default Component;
