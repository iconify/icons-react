import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys42lxb9r.css';
import '../../css/k/ky_i-dbux.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ys42lxb9r"/><path class="ky_i-dbux"/>`,
		"fallback": "carbon:snow-scattered",
	});
}

export default Component;
