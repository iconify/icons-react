import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5if0lb-o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5if0lb-o"/>`,
		"fallback": "icon-park-outline:three",
	});
}

export default Component;
