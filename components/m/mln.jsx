import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhrwv_b1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhrwv_b1q"/>`,
		"fallback": "token:mln",
	});
}

export default Component;
