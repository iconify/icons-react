import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekgc8_cdh.css';
import '../../css/k/k9y255awr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekgc8_cdh"/><path class="k9y255awr"/>`,
		"fallback": "energy-icons:server-48-bold",
	});
}

export default Component;
