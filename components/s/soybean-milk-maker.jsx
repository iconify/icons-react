import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzm20-b0d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzm20-b0d"/>`,
		"fallback": "icon-park-outline:soybean-milk-maker",
	});
}

export default Component;
