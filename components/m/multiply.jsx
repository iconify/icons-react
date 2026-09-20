import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmu4csbxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmu4csbxk"/>`,
		"fallback": "majesticons:multiply",
	});
}

export default Component;
