import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae7h3dvvg.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae7h3dvvg"/>`,
		"fallback": "foundation:social-treehouse",
	});
}

export default Component;
