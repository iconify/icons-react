import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrt-k2bou.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrt-k2bou"/>`,
		"fallback": "carbon:thumbs-up-double",
	});
}

export default Component;
