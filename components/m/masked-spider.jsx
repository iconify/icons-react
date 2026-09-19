import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn3h6pbxt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn3h6pbxt"/>`,
		"fallback": "game-icons:masked-spider",
	});
}

export default Component;
