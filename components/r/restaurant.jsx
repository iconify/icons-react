import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-0qsbb3u.css';
import '../../css/r/rbtwur1wh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-0qsbb3u"/><path class="rbtwur1wh"/>`,
		"fallback": "carbon:restaurant",
	});
}

export default Component;
