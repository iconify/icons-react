import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-kpfab6b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-kpfab6b"/>`,
		"fallback": "octicon:list-ordered-16",
	});
}

export default Component;
