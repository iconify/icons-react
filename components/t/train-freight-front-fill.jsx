import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7_hf7wcz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7_hf7wcz"/>`,
		"fallback": "bi:train-freight-front-fill",
	});
}

export default Component;
