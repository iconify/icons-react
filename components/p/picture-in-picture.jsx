import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qkpf7-2jn.css';
import '../../css/l/lh9gq8cab.css';
import '../../css/k/kluqlxt4c.css';
import '../../css/x/xxvxxnbzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qkpf7-2jn wm-shadow"/><path class="lh9gq8cab wm-shadow"/><path class="kluqlxt4c"/><path class="xxvxxnbzl"/></g>`,
		"fallback": "withicons-brutal:picture-in-picture",
	});
}

export default Component;
