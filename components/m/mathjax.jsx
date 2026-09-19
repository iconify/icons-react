import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0fd-kbpj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s0fd-kbpj"/>`,
		"fallback": "file-icons:mathjax",
	});
}

export default Component;
