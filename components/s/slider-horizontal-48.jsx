import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s934moo8g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s934moo8g"/>`,
		"fallback": "energy-icons:slider-horizontal-48",
	});
}

export default Component;
