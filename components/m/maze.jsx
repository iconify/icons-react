import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v39fq-b_u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v39fq-b_u"/>`,
		"fallback": "game-icons:maze",
	});
}

export default Component;
