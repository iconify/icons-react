import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwk_-hbbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwk_-hbbk"/>`,
		"fallback": "withicons:send-horizontal-solid",
	});
}

export default Component;
