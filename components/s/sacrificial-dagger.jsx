import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll6m4rbkt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ll6m4rbkt"/>`,
		"fallback": "game-icons:sacrificial-dagger",
	});
}

export default Component;
