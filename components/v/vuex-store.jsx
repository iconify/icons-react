import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kionsguxs.css';
import '../../css/e/e1v-2sbam.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kionsguxs"/><path class="e1v-2sbam"/>`,
		"fallback": "material-icon-theme:vuex-store",
	});
}

export default Component;
