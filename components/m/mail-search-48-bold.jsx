import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oku93bowu.css';
import '../../css/p/p2-gc3lvi.css';
import '../../css/n/nzvyk8_7m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oku93bowu"/><path class="p2-gc3lvi"/><path class="nzvyk8_7m"/>`,
		"fallback": "energy-icons:mail-search-48-bold",
	});
}

export default Component;
