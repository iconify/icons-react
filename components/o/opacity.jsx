import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voozf6bkw.css';
import '../../css/x/xewwv3l1v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="voozf6bkw"/><path class="xewwv3l1v"/>`,
		"fallback": "cil:opacity",
	});
}

export default Component;
