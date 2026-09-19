import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t19jz2bby.css';
import '../../css/y/yti26qboi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t19jz2bby"/><path class="yti26qboi"/>`,
		"fallback": "carbon:undefined",
	});
}

export default Component;
