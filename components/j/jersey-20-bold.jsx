import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea-d-nbfx.css';
import '../../css/j/jjn413bew.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea-d-nbfx"/><path class="jjn413bew"/>`,
		"fallback": "energy-icons:jersey-20-bold",
	});
}

export default Component;
