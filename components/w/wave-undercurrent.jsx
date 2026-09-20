import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdd0lsbsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdd0lsbsu"/>`,
		"fallback": "mdi:wave-undercurrent",
	});
}

export default Component;
