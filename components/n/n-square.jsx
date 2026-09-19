import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw8j__w4m.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw8j__w4m"/>`,
		"fallback": "vs:n-square",
	});
}

export default Component;
