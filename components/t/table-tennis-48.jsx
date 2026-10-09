import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytknsibzh.css';
import '../../css/v/vr1h12b6u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytknsibzh"/><path class="vr1h12b6u"/>`,
		"fallback": "energy-icons:table-tennis-48",
	});
}

export default Component;
