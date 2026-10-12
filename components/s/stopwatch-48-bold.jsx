import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij6cj4rwy.css';
import '../../css/i/iqxu07b4z.css';
import '../../css/u/uz1rh-b9a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ij6cj4rwy"/><path class="iqxu07b4z"/><path class="uz1rh-b9a"/>`,
		"fallback": "energy-icons:stopwatch-48-bold",
	});
}

export default Component;
