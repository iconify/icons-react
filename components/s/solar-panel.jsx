import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf0d5sb5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zf0d5sb5z"/>`,
		"fallback": "noviair:solar-panel",
	});
}

export default Component;
