import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xye8dcczv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xye8dcczv"/>`,
		"fallback": "fa7-brands:square-github",
	});
}

export default Component;
