import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h9lk5lbki.css';
import '../../css/m/mkmh0y-1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h9lk5lbki"/><rect class="mkmh0y-1q"/></g>`,
		"fallback": "lucide:list-todo",
	});
}

export default Component;
