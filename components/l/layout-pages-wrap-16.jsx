import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuw044e9p.css';
import '../../css/g/ghm7_z0ly.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nuw044e9p"/><path class="ghm7_z0ly"/>`,
		"fallback": "qlementine-icons:layout-pages-wrap-16",
	});
}

export default Component;
