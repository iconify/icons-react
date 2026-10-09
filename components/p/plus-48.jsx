import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df1n7oboy.css';
import '../../css/a/a_knjioaa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df1n7oboy"/><path class="a_knjioaa"/>`,
		"fallback": "energy-icons:plus-48",
	});
}

export default Component;
