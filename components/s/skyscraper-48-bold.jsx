import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_3xo-zcn.css';
import '../../css/f/fy8hrfkoj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_3xo-zcn"/><path class="fy8hrfkoj"/>`,
		"fallback": "energy-icons:skyscraper-48-bold",
	});
}

export default Component;
