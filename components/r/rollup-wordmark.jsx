import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq-55_boz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sq-55_boz"/>`,
		"fallback": "devicon-plain:rollup-wordmark",
	});
}

export default Component;
