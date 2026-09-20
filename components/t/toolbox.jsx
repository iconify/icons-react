import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/soaq0qb0v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="soaq0qb0v"/>`,
		"fallback": "pinhead:toolbox",
	});
}

export default Component;
