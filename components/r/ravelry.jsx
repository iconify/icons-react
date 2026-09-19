import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_30-2b7p.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_30-2b7p"/>`,
		"fallback": "fa7-brands:ravelry",
	});
}

export default Component;
