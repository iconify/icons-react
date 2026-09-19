import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv1sajb2x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv1sajb2x"/>`,
		"fallback": "cib:stackbit",
	});
}

export default Component;
