import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9_xqi7vk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9_xqi7vk"/>`,
		"fallback": "dashicons:podio",
	});
}

export default Component;
