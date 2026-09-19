import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g35llpa4c.css';

const viewBox = {"width":16,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g35llpa4c"/>`,
		"fallback": "fontisto:lightbulb",
	});
}

export default Component;
