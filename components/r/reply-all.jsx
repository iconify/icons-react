import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t38dfkb_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t38dfkb_q"/>`,
		"fallback": "noviair:reply-all",
	});
}

export default Component;
