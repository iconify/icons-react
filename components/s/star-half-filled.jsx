import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dc-b3s.css';
import '../../css/c/chdxye.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-from-34.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dc-b3s"/><path class="chdxye"/>`,
		"fallback": "line-md:star-half-filled",
	});
}

export default Component;
