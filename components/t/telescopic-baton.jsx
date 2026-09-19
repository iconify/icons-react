import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g31bksikt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g31bksikt"/>`,
		"fallback": "game-icons:telescopic-baton",
	});
}

export default Component;
