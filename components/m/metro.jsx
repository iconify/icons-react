import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irskxtb6s.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irskxtb6s"/>`,
		"fallback": "dinkie-icons:metro",
	});
}

export default Component;
