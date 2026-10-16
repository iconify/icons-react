import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uma6ucy9m.css';
import '../../css/f/f-a0_gbpc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uma6ucy9m"/><path class="f-a0_gbpc"/>`,
		"fallback": "energy-icons:signpost-20",
	});
}

export default Component;
