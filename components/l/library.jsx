import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1bjk9b9k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1bjk9b9k"/>`,
		"fallback": "doodle-icons:library",
	});
}

export default Component;
