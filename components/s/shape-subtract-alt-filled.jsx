import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lodgmg-3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lodgmg-3a"/>`,
		"fallback": "boxicons:shape-subtract-alt-filled",
	});
}

export default Component;
