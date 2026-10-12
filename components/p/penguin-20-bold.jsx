import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3tyy5-9p.css';
import '../../css/u/u6c4ubc7p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3tyy5-9p"/><path class="u6c4ubc7p"/>`,
		"fallback": "energy-icons:penguin-20-bold",
	});
}

export default Component;
