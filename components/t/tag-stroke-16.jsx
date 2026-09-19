import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8rmcuiam.css';
import '../../css/j/jy4g_db5j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8rmcuiam"/><circle class="jy4g_db5j"/>`,
		"fallback": "garden:tag-stroke-16",
	});
}

export default Component;
