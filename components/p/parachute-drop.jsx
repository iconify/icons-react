import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kck5-abkp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kck5-abkp"/>`,
		"fallback": "streamline:parachute-drop",
	});
}

export default Component;
