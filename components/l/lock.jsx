import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrw_4kbwk.css';

const viewBox = {"width":28,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrw_4kbwk"/>`,
		"fallback": "et:lock",
	});
}

export default Component;
