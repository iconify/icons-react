import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsp4kg7um.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsp4kg7um"/>`,
		"fallback": "selfhst:microsoft-word-2000-dark",
	});
}

export default Component;
