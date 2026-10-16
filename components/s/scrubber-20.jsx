import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iypo-rqra.css';
import '../../css/y/y2-zu1b4b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iypo-rqra"/><path class="y2-zu1b4b"/>`,
		"fallback": "energy-icons:scrubber-20",
	});
}

export default Component;
