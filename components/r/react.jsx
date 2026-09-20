import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpn0lkbck.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpn0lkbck"/>`,
		"fallback": "la:react",
	});
}

export default Component;
