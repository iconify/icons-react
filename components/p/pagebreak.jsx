import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzlu_i1rh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzlu_i1rh"/>`,
		"fallback": "icomoon-free:pagebreak",
	});
}

export default Component;
