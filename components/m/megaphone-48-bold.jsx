import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjut8esur.css';
import '../../css/u/ujxou552b.css';
import '../../css/h/h02k7abwd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjut8esur"/><path class="ujxou552b"/><path class="h02k7abwd"/>`,
		"fallback": "energy-icons:megaphone-48-bold",
	});
}

export default Component;
