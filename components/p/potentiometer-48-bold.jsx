import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwi-_4bjb.css';
import '../../css/n/no332ubsu.css';
import '../../css/y/ygz8ri58s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwi-_4bjb"/><path class="no332ubsu"/><path class="ygz8ri58s"/>`,
		"fallback": "energy-icons:potentiometer-48-bold",
	});
}

export default Component;
