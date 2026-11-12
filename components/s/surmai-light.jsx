import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4s5wel8j.css';
import '../../css/f/fpmgnqbfc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4s5wel8j"/><path class="fpmgnqbfc"/>`,
		"fallback": "selfhst:surmai-light",
	});
}

export default Component;
