import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/saail3bjj.css';
import '../../css/v/v58dvfb0o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="saail3bjj"/><path class="v58dvfb0o"/>`,
		"fallback": "energy-icons:level-gauge-20-bold",
	});
}

export default Component;
