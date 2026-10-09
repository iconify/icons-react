import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2-3n8bey.css';
import '../../css/q/q7a8l0b_f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2-3n8bey"/><path class="q7a8l0b_f"/>`,
		"fallback": "energy-icons:radiation-20",
	});
}

export default Component;
