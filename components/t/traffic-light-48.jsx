import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc9t8fp5n.css';
import '../../css/n/nl5mucbfu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc9t8fp5n"/><path class="nl5mucbfu"/>`,
		"fallback": "energy-icons:traffic-light-48",
	});
}

export default Component;
