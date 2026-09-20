import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf69e7b9q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf69e7b9q"/>`,
		"fallback": "selfhst:scrypted-dark",
	});
}

export default Component;
