import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uaz4rm-bq.css';
import '../../css/k/kpyqg9v7m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uaz4rm-bq"/><path class="kpyqg9v7m"/>`,
		"fallback": "garden:translation-x-20",
	});
}

export default Component;
