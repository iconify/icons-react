import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzy0yvbxe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uzy0yvbxe"/>`,
		"fallback": "healthicons:mosque",
	});
}

export default Component;
