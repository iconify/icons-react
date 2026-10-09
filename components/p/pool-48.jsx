import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-eh9wb_p.css';
import '../../css/q/q3uapjb3p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-eh9wb_p"/><path class="q3uapjb3p"/>`,
		"fallback": "energy-icons:pool-48",
	});
}

export default Component;
