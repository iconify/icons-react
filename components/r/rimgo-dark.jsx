import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z15mw-brh.css';
import '../../css/j/jdcotzpev.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z15mw-brh"/><circle class="jdcotzpev"/>`,
		"fallback": "selfhst:rimgo-dark",
	});
}

export default Component;
