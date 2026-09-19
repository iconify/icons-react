import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq-yynbtf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq-yynbtf"/>`,
		"fallback": "game-icons:siege-tower",
	});
}

export default Component;
