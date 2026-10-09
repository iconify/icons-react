import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mepm0bcky.css';
import '../../css/j/jsr_zti9f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mepm0bcky"/><path class="jsr_zti9f"/>`,
		"fallback": "energy-icons:settings-48-bold",
	});
}

export default Component;
