import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_xs-qb3d.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_xs-qb3d"/>`,
		"fallback": "devicon:nano-wordmark",
	});
}

export default Component;
