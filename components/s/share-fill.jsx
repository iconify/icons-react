import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz4769byj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz4769byj"/>`,
		"fallback": "bi:share-fill",
	});
}

export default Component;
