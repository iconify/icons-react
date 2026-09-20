import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xeiamk_lg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xeiamk_lg"/>`,
		"fallback": "solar:rewind-back-circle-outline",
	});
}

export default Component;
