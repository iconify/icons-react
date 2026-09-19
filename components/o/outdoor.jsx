import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7ug1wb-d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7ug1wb-d"/>`,
		"fallback": "icon-park-outline:outdoor",
	});
}

export default Component;
