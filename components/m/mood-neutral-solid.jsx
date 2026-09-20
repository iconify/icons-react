import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3b5e2bkg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3b5e2bkg"/>`,
		"fallback": "zondicons:mood-neutral-solid",
	});
}

export default Component;
