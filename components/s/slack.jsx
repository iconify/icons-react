import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk_jyfxtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk_jyfxtu"/>`,
		"fallback": "grommet-icons:slack",
	});
}

export default Component;
