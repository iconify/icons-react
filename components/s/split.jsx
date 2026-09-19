import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzjr5cb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzjr5cb_l"/>`,
		"fallback": "grommet-icons:split",
	});
}

export default Component;
