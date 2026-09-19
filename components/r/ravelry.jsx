import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqhk41b5v.css';

const viewBox = {"width":2112,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqhk41b5v"/>`,
		"fallback": "fa:ravelry",
	});
}

export default Component;
