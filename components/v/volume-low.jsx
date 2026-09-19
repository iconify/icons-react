import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m22ynacqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m22ynacqo"/>`,
		"fallback": "bxs:volume-low",
	});
}

export default Component;
