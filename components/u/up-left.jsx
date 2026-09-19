import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pccwcw4ye.css';
import '../../css/a/alckcbcdo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pccwcw4ye"/><path class="alckcbcdo"/>`,
		"fallback": "flat-color-icons:up-left",
	});
}

export default Component;
