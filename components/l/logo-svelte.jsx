import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arlt_l0ht.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arlt_l0ht"/>`,
		"fallback": "carbon:logo-svelte",
	});
}

export default Component;
