import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj8esq-gp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj8esq-gp"/>`,
		"fallback": "fa7-solid:toggle-off",
	});
}

export default Component;
