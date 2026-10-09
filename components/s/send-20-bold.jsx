import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z63nbsbdb.css';
import '../../css/h/hjq60mx9m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z63nbsbdb"/><path class="hjq60mx9m"/>`,
		"fallback": "energy-icons:send-20-bold",
	});
}

export default Component;
