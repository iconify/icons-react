import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af_m9lb8y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af_m9lb8y"/>`,
		"fallback": "selfhst:nyt-crossword-dark",
	});
}

export default Component;
