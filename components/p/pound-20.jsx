import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duklqwb0b.css';
import '../../css/j/jt3-tkbuw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duklqwb0b"/><path class="jt3-tkbuw"/>`,
		"fallback": "energy-icons:pound-20",
	});
}

export default Component;
