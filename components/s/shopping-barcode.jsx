import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9-sgc7ks.css';

const viewBox = {"width":35,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9-sgc7ks"/>`,
		"fallback": "fontisto:shopping-barcode",
	});
}

export default Component;
