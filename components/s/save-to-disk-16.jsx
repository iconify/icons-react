import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tznvg3blh.css';
import '../../css/g/gvyhpkbmc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tznvg3blh"/><path clip-rule="evenodd" class="gvyhpkbmc"/>`,
		"fallback": "qlementine-icons:save-to-disk-16",
	});
}

export default Component;
