import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/paefs-daw.css';
import '../../css/y/y83ejubfa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="paefs-daw"/><path class="y83ejubfa"/></g>`,
		"fallback": "streamline-color:street-road",
	});
}

export default Component;
