import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz0wpbbiw.css';
import '../../css/m/mah8bbc0m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz0wpbbiw"/><path class="mah8bbc0m"/>`,
		"fallback": "energy-icons:pier-48",
	});
}

export default Component;
