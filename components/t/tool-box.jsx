import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc57nxbkk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc57nxbkk"/>`,
		"fallback": "carbon:tool-box",
	});
}

export default Component;
