import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my6nuwbux.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my6nuwbux"/>`,
		"fallback": "selfhst:nyt-wordle-light",
	});
}

export default Component;
