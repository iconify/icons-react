import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyzll6bdo.css';
import '../../css/z/z6uphtb8a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyzll6bdo"/><path class="z6uphtb8a"/>`,
		"fallback": "energy-icons:saf-20",
	});
}

export default Component;
