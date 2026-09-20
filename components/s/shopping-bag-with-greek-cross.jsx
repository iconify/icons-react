import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kka7akb8d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kka7akb8d"/>`,
		"fallback": "pinhead:shopping-bag-with-greek-cross",
	});
}

export default Component;
