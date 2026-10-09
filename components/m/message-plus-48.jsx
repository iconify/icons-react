import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyrurpboo.css';
import '../../css/v/vmz9b8bgm.css';
import '../../css/j/jjy9cwbse.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyrurpboo"/><path class="vmz9b8bgm"/><path class="jjy9cwbse"/>`,
		"fallback": "energy-icons:message-plus-48",
	});
}

export default Component;
