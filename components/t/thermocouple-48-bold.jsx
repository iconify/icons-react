import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv51c3bzy.css';
import '../../css/h/h09j6xbhq.css';
import '../../css/p/p1u31l47s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv51c3bzy"/><path class="h09j6xbhq"/><path class="p1u31l47s"/>`,
		"fallback": "energy-icons:thermocouple-48-bold",
	});
}

export default Component;
