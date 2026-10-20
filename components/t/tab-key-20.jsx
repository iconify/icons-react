import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grwem7bvz.css';
import '../../css/a/anr4_-b4c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grwem7bvz"/><path class="anr4_-b4c"/>`,
		"fallback": "energy-icons:tab-key-20",
	});
}

export default Component;
