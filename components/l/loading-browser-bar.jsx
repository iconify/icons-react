import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k6l9xwbnp.css';
import '../../css/c/cf8f9ynoi.css';
import '../../css/h/h1beiq6dv.css';
import '../../css/k/kxshi8bqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="k6l9xwbnp"/><path class="cf8f9ynoi"/><path class="h1beiq6dv"/><path class="kxshi8bqq"/></g>`,
		"fallback": "streamline-freehand-color:loading-browser-bar",
	});
}

export default Component;
