import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9q-2bb0j.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9q-2bb0j"/>`,
		"fallback": "picon:serving",
	});
}

export default Component;
