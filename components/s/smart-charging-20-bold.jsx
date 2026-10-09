import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkh_084xi.css';
import '../../css/w/wpnm42b6c.css';
import '../../css/g/g17jsq6yv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkh_084xi"/><path class="wpnm42b6c"/><path class="g17jsq6yv"/>`,
		"fallback": "energy-icons:smart-charging-20-bold",
	});
}

export default Component;
