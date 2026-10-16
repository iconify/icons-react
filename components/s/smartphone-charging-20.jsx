import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m417uzbhw.css';
import '../../css/l/l0mscrdyr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m417uzbhw"/><path class="l0mscrdyr"/>`,
		"fallback": "energy-icons:smartphone-charging-20",
	});
}

export default Component;
