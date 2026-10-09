import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngycp3qcw.css';
import '../../css/o/obdvgrbkc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngycp3qcw"/><path class="obdvgrbkc"/>`,
		"fallback": "energy-icons:save-48-bold",
	});
}

export default Component;
