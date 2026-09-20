import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb69-0b6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb69-0b6a"/>`,
		"fallback": "lucide:volume-1",
	});
}

export default Component;
