import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhlw3db6w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhlw3db6w"/>`,
		"fallback": "game-icons:shield-echoes",
	});
}

export default Component;
