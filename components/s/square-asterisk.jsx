import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugqc2tbhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugqc2tbhk"/>`,
		"fallback": "hugeicons:square-asterisk",
	});
}

export default Component;
