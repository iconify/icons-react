import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1ywg7b9f.css';
import '../../css/r/rcgsjubiv.css';
import '../../css/y/ym8wn7bnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1ywg7b9f"/><path class="rcgsjubiv"/><path clip-rule="evenodd" class="ym8wn7bnw"/>`,
		"fallback": "solar:rocket-bold",
	});
}

export default Component;
