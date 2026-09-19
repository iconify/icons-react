import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp29vub2s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp29vub2s"/>`,
		"fallback": "bi:stars",
	});
}

export default Component;
