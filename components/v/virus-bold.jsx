import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at0u4ld1u.css';
import '../../css/d/dicubfbom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="at0u4ld1u"/><path class="dicubfbom"/>`,
		"fallback": "solar:virus-bold",
	});
}

export default Component;
