import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvfqi0v0k.css';
import '../../css/l/los2jo2ye.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvfqi0v0k"/><path class="los2jo2ye"/>`,
		"fallback": "energy-icons:pyramid-48-bold",
	});
}

export default Component;
