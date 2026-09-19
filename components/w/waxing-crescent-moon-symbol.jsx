import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rew5u3t-g.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rew5u3t-g"/>`,
		"fallback": "dinkie-icons:waxing-crescent-moon-symbol",
	});
}

export default Component;
