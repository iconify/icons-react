import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo5au9b0i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo5au9b0i"/>`,
		"fallback": "selfhst:versity-light",
	});
}

export default Component;
