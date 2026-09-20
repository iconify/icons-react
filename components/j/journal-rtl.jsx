import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukr-_lbgh.css';
import '../../css/y/yqzq-hios.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukr-_lbgh"/><path class="yqzq-hios"/>`,
		"fallback": "ooui:journal-rtl",
	});
}

export default Component;
