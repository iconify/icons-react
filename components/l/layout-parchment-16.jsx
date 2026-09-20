import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzzlwulho.css';
import '../../css/u/u9tqtbb-f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzzlwulho"/><path class="u9tqtbb-f"/>`,
		"fallback": "qlementine-icons:layout-parchment-16",
	});
}

export default Component;
