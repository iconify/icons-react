import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhucej_2y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhucej_2y"/>`,
		"fallback": "icon-park-outline:period",
	});
}

export default Component;
