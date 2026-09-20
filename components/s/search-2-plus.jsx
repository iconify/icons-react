import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hof0els4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hof0els4n"/>`,
		"fallback": "keyline-icons:search-2-plus",
	});
}

export default Component;
