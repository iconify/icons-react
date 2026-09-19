import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orjn0-yiw.css';
import '../../css/j/jir5wfbda.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orjn0-yiw"/><path class="jir5wfbda"/>`,
		"fallback": "ion:toggle-filled",
	});
}

export default Component;
