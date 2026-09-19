import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvifkjfwx.css';

const viewBox = {"width":2304,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvifkjfwx"/>`,
		"fallback": "fa:pied-piper",
	});
}

export default Component;
