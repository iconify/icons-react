import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv4wbxftm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv4wbxftm"/>`,
		"fallback": "icon-park-outline:switch-track",
	});
}

export default Component;
