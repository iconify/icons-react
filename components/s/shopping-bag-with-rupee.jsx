import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr0d_ccqk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr0d_ccqk"/>`,
		"fallback": "pinhead:shopping-bag-with-rupee",
	});
}

export default Component;
