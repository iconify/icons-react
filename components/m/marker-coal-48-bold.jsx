import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etlms99xu.css';
import '../../css/c/c4c6vbbnb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etlms99xu"/><path class="c4c6vbbnb"/>`,
		"fallback": "energy-icons:marker-coal-48-bold",
	});
}

export default Component;
