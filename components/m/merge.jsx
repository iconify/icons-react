import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swj8w_bki.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swj8w_bki"/>`,
		"fallback": "carbon:merge",
	});
}

export default Component;
