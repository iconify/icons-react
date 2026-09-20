import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aie3zsbbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aie3zsbbk"/>`,
		"fallback": "mynaui:mask",
	});
}

export default Component;
