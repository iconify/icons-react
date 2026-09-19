import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjmja5ggc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjmja5ggc"/>`,
		"fallback": "icon-park-outline:pinwheel",
	});
}

export default Component;
