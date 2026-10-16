import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j63hg3b3u.css';
import '../../css/j/je8d7-b9z.css';
import '../../css/e/e9n3d1ijm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j63hg3b3u"/><path class="je8d7-b9z"/><path class="e9n3d1ijm"/>`,
		"fallback": "energy-icons:water-tower-48-bold",
	});
}

export default Component;
