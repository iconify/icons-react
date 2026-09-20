import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpqjhyevn.css';
import '../../css/i/i5eb24tdq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpqjhyevn"/><path class="i5eb24tdq"/>`,
		"fallback": "ooui:logo-cc",
	});
}

export default Component;
