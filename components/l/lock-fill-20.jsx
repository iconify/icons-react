import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm3-8ybbn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm3-8ybbn"/>`,
		"fallback": "garden:lock-fill-20",
	});
}

export default Component;
