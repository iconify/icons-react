import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/teov2sdlc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="teov2sdlc"/>`,
		"fallback": "game-icons:nested-eclipses",
	});
}

export default Component;
