import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5505n_tx.css';

const viewBox = {"width":1664,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5505n_tx"/>`,
		"fallback": "fa:search",
	});
}

export default Component;
