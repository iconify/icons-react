import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lld64mb1j.css';
import '../../css/y/yno7aib_e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lld64mb1j"/><path class="yno7aib_e"/>`,
		"fallback": "energy-icons:shield-user-48",
	});
}

export default Component;
