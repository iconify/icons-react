import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7445dbmo.css';
import '../../css/c/c9yqj13fx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7445dbmo"/><path class="c9yqj13fx"/>`,
		"fallback": "energy-icons:voltage-tester-48",
	});
}

export default Component;
