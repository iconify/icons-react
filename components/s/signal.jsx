import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8h4sab-u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8h4sab-u"/>`,
		"fallback": "bi:signal",
	});
}

export default Component;
