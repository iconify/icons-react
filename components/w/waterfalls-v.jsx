import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dha5zw5kn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dha5zw5kn"/>`,
		"fallback": "icon-park-outline:waterfalls-v",
	});
}

export default Component;
