import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pect2h6nx.css';
import '../../css/e/ejop8g90f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pect2h6nx"/><path class="ejop8g90f"/>`,
		"fallback": "energy-icons:power-48",
	});
}

export default Component;
