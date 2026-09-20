import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usi-x5bch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usi-x5bch"/>`,
		"fallback": "ri:spam-3-fill",
	});
}

export default Component;
