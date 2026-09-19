import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xtd_cpbzp.css';
import '../../css/g/goj0r4b2m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xtd_cpbzp"/><path class="goj0r4b2m"/></g>`,
		"fallback": "healthicons:low-bars",
	});
}

export default Component;
