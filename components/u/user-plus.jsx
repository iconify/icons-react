import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf4a-abip.css';
import '../../css/b/b45rmqb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf4a-abip"/><path class="b45rmqb_t"/>`,
		"fallback": "prime:user-plus",
	});
}

export default Component;
