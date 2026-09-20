import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab4vndb4j.css';
import '../../css/w/w_b7fnbhh.css';
import '../../css/c/c4ksf17xj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab4vndb4j"/><path clip-rule="evenodd" class="w_b7fnbhh"/><path class="c4ksf17xj"/>`,
		"fallback": "stash:qr-code-light",
	});
}

export default Component;
