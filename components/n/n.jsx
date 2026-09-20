import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9cng6v1j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9cng6v1j"/>`,
		"fallback": "pinhead:n",
	});
}

export default Component;
