import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q40h8-b-p.css';
import '../../css/w/wu_emw7zr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q40h8-b-p"/><path class="wu_emw7zr"/>`,
		"fallback": "energy-icons:run-of-river-48-bold",
	});
}

export default Component;
