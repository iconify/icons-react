import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol8x4ezvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol8x4ezvu"/>`,
		"fallback": "withicons:music-2-solid",
	});
}

export default Component;
