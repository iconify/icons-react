import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de3s681aw.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de3s681aw"/>`,
		"fallback": "dinkie-icons:orthogon9x9",
	});
}

export default Component;
