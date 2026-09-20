import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/e/eb71h5gaz.css';
import '../../css/d/drf462b-h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="eb71h5gaz"/><path class="drf462b-h"/></g>`,
		"fallback": "streamline-plump-color:invisible-2",
	});
}

export default Component;
