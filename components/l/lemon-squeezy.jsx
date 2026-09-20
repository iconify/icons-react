import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuo09szyx.css';

const viewBox = {"width":21,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cuo09szyx"/>`,
		"fallback": "thesvg-color:lemon-squeezy",
	});
}

export default Component;
