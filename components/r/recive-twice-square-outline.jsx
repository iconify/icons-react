import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4o-mf99w.css';
import '../../css/c/cnzpvyp0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4o-mf99w"/><path clip-rule="evenodd" class="cnzpvyp0b"/>`,
		"fallback": "solar:recive-twice-square-outline",
	});
}

export default Component;
