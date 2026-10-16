import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2cwbgbog.css';
import '../../css/m/mqzn7v0fm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2cwbgbog"/><path class="mqzn7v0fm"/>`,
		"fallback": "energy-icons:seabed-survey-20-bold",
	});
}

export default Component;
