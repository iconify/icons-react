import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt29tcb_a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt29tcb_a"/>`,
		"fallback": "game-icons:metal-plate",
	});
}

export default Component;
