import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acm28njiw.css';
import '../../css/w/w31w9xbxx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acm28njiw"/><path class="w31w9xbxx"/>`,
		"fallback": "energy-icons:storage-heater-48",
	});
}

export default Component;
