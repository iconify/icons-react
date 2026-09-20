import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyn1h1bel.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyn1h1bel"/>`,
		"fallback": "lsicon:question-outline",
	});
}

export default Component;
