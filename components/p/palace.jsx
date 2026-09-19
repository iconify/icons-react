import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy_70-b1a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy_70-b1a"/>`,
		"fallback": "icon-park-outline:palace",
	});
}

export default Component;
