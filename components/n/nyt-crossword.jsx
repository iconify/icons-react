import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6gcwac9u.css';
import '../../css/a/af_m9lb8y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6gcwac9u"/><path class="af_m9lb8y"/>`,
		"fallback": "selfhst:nyt-crossword",
	});
}

export default Component;
