import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckj36vb5o.css';
import '../../css/t/tmqztg9xx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckj36vb5o"/><path class="tmqztg9xx"/>`,
		"fallback": "energy-icons:scroll-48",
	});
}

export default Component;
