import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1ktr8brq.css';
import '../../css/m/mug5xin-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1ktr8brq"/><path class="mug5xin-s"/>`,
		"fallback": "solar:pulse-2-bold-duotone",
	});
}

export default Component;
