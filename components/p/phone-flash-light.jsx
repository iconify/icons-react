import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkkg48bsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkkg48bsp"/>`,
		"fallback": "streamline-ultimate:phone-flash-light",
	});
}

export default Component;
