import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_w54cc3x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_w54cc3x"/>`,
		"fallback": "game-icons:south-africa",
	});
}

export default Component;
