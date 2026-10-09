import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vufao1btt.css';
import '../../css/q/q59a9ubij.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vufao1btt"/><path class="q59a9ubij"/>`,
		"fallback": "energy-icons:solar-thermal-20",
	});
}

export default Component;
