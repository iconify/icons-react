import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma_gifbgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma_gifbgk"/>`,
		"fallback": "cbi:volvo-alt",
	});
}

export default Component;
