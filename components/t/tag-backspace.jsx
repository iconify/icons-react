import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpxc1bcpl.css';

const viewBox = {"width":512,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpxc1bcpl"/>`,
		"fallback": "zmdi:tag-backspace",
	});
}

export default Component;
