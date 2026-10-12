import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amb3slunr.css';
import '../../css/p/prn6stb0i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amb3slunr"/><path class="prn6stb0i"/>`,
		"fallback": "energy-icons:kick-scooter-48",
	});
}

export default Component;
