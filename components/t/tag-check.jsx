import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbkca8bpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbkca8bpf"/>`,
		"fallback": "noviair-light:tag-check",
	});
}

export default Component;
