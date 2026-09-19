import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrclusb7m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrclusb7m"/>`,
		"fallback": "icon-park-outline:setting-config",
	});
}

export default Component;
