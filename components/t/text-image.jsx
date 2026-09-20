import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l886_s5ym.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l886_s5ym"/>`,
		"fallback": "memory:text-image",
	});
}

export default Component;
