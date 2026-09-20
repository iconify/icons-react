import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8li1cb6w.css';
import '../../css/j/jhuinh89q.css';
import '../../css/l/lu352gbpw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8li1cb6w"/><path class="jhuinh89q"/><path class="lu352gbpw"/>`,
		"fallback": "vaadin:stopwatch",
	});
}

export default Component;
