import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idb_0ybwp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idb_0ybwp"/>`,
		"fallback": "icon-park-outline:up-two",
	});
}

export default Component;
