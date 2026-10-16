import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnk58xbgu.css';
import '../../css/i/ifbfh7xzx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnk58xbgu"/><path class="ifbfh7xzx"/>`,
		"fallback": "energy-icons:waypoints-48-bold",
	});
}

export default Component;
