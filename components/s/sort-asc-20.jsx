import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajs58j51b.css';
import '../../css/v/vh5d1qbgq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajs58j51b"/><path class="vh5d1qbgq"/>`,
		"fallback": "energy-icons:sort-asc-20",
	});
}

export default Component;
