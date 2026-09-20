import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsehh6bxi.css';
import '../../css/q/q3ku_gbpq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsehh6bxi"/><path class="q3ku_gbpq"/>`,
		"fallback": "qlementine-icons:layout-pages-horizontal-16",
	});
}

export default Component;
