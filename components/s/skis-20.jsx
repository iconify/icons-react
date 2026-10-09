import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apm4u9oep.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apm4u9oep"/>`,
		"fallback": "energy-icons:skis-20",
	});
}

export default Component;
