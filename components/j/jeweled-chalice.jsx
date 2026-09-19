import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej3np33fg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ej3np33fg"/>`,
		"fallback": "game-icons:jeweled-chalice",
	});
}

export default Component;
