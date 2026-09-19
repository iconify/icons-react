import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjs3ttbyq.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjs3ttbyq"/>`,
		"fallback": "dinkie-icons:left-magnifying-glass-filled",
	});
}

export default Component;
