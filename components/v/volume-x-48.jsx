import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpmvct1xz.css';
import '../../css/e/exkkztbix.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpmvct1xz"/><path class="exkkztbix"/>`,
		"fallback": "energy-icons:volume-x-48",
	});
}

export default Component;
