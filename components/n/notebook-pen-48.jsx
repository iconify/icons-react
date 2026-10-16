import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3wcsw9-a.css';
import '../../css/c/c05cblb0l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3wcsw9-a"/><path class="c05cblb0l"/>`,
		"fallback": "energy-icons:notebook-pen-48",
	});
}

export default Component;
