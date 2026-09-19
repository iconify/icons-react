import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwvyjkl5g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwvyjkl5g"/>`,
		"fallback": "game-icons:round-table",
	});
}

export default Component;
