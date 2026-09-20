import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao5mpybbg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ao5mpybbg"/>`,
		"fallback": "selfhst:pocket-id-light",
	});
}

export default Component;
