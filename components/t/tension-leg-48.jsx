import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvx4u6ucp.css';
import '../../css/g/grugfhhze.css';
import '../../css/y/y-445ob1s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvx4u6ucp"/><path class="grugfhhze"/><path class="y-445ob1s"/>`,
		"fallback": "energy-icons:tension-leg-48",
	});
}

export default Component;
