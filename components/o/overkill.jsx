import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enhro2a4g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enhro2a4g"/>`,
		"fallback": "game-icons:overkill",
	});
}

export default Component;
