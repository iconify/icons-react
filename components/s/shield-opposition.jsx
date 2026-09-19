import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq23lwb7w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq23lwb7w"/>`,
		"fallback": "game-icons:shield-opposition",
	});
}

export default Component;
