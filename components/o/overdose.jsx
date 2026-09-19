import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpyzpacxv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpyzpacxv"/>`,
		"fallback": "game-icons:overdose",
	});
}

export default Component;
