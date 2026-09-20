import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjlvsp_ed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjlvsp_ed"/>`,
		"fallback": "pixelarticons:watch-solid",
	});
}

export default Component;
