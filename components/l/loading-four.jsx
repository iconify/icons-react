import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn_94diua.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn_94diua"/>`,
		"fallback": "icon-park-outline:loading-four",
	});
}

export default Component;
