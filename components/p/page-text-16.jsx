import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udaapxl3q.css';
import '../../css/o/owojoi_ur.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udaapxl3q"/><path clip-rule="evenodd" class="owojoi_ur"/>`,
		"fallback": "qlementine-icons:page-text-16",
	});
}

export default Component;
