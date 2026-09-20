import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1er3c68j.css';
import '../../css/d/dmrek5bey.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1er3c68j"/><path clip-rule="evenodd" class="dmrek5bey"/>`,
		"fallback": "qlementine-icons:mouse-16",
	});
}

export default Component;
