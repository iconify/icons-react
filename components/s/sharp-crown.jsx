import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cewjf_06r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cewjf_06r"/>`,
		"fallback": "game-icons:sharp-crown",
	});
}

export default Component;
