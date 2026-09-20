import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhdb-55mc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhdb-55mc"/>`,
		"fallback": "qlementine-icons:undo-16",
	});
}

export default Component;
