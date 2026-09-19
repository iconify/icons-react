import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf_ma82-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf_ma82-l"/>`,
		"fallback": "iconoir:pillow",
	});
}

export default Component;
