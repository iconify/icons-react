import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu33pmb_f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uu33pmb_f"/>`,
		"fallback": "carbon:vintage-mac",
	});
}

export default Component;
