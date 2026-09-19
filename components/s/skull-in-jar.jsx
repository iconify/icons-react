import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmo3-snvx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmo3-snvx"/>`,
		"fallback": "game-icons:skull-in-jar",
	});
}

export default Component;
