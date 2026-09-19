import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t871fxb5m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t871fxb5m"/>`,
		"fallback": "file-icons:ocaml",
	});
}

export default Component;
