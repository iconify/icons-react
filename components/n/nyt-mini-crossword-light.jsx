import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kffzjgb7f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kffzjgb7f"/>`,
		"fallback": "selfhst:nyt-mini-crossword-light",
	});
}

export default Component;
