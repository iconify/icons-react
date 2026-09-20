import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt9kp4zrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt9kp4zrx"/>`,
		"fallback": "tabler:number-45-small",
	});
}

export default Component;
