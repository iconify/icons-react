import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwt473w_d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwt473w_d"/>`,
		"fallback": "game-icons:raining",
	});
}

export default Component;
