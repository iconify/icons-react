import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtfmx7b3v.css';
import '../../css/b/bopf4ubik.css';
import '../../css/e/eb6s51zoz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wtfmx7b3v"><path class="bopf4ubik"/><path class="eb6s51zoz"/></g>`,
		"fallback": "flat-color-icons:left",
	});
}

export default Component;
