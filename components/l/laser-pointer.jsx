import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsffvtb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsffvtb4d"/>`,
		"fallback": "mdi:laser-pointer",
	});
}

export default Component;
