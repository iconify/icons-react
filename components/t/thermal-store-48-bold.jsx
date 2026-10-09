import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epdku6b-c.css';
import '../../css/s/s7lyrq7xx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epdku6b-c"/><path class="s7lyrq7xx"/>`,
		"fallback": "energy-icons:thermal-store-48-bold",
	});
}

export default Component;
