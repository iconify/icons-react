import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syt3s17lc.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syt3s17lc"/>`,
		"fallback": "fa7-solid:volume-low",
	});
}

export default Component;
