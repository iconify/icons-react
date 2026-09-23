import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g62-gybbi.css';
import '../../css/p/pl94hcwzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g62-gybbi"/><path class="pl94hcwzq"/></g>`,
		"fallback": "keyline-icons:monitor-sparkles-fill",
	});
}

export default Component;
