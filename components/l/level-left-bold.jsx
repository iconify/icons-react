import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz3eg4bhq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz3eg4bhq"/>`,
		"fallback": "vaadin:level-left-bold",
	});
}

export default Component;
