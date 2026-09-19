import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytc-hrbpf.css';
import '../../css/x/xtnb74b1o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytc-hrbpf"/><path class="xtnb74b1o"/>`,
		"fallback": "carbon:noodle-bowl",
	});
}

export default Component;
