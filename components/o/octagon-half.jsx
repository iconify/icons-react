import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1kskccyg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1kskccyg"/>`,
		"fallback": "bi:octagon-half",
	});
}

export default Component;
