import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m229h9-8o.css';
import '../../css/b/bgzelubmy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="m229h9-8o"/><path class="bgzelubmy"/></g>`,
		"fallback": "cryptocurrency-color:one",
	});
}

export default Component;
