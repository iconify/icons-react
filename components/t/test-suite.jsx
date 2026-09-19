import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi3t3pbeu.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi3t3pbeu"/>`,
		"fallback": "fluent-mdl2:test-suite",
	});
}

export default Component;
