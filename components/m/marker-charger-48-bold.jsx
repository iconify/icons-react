import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etlms99xu.css';
import '../../css/j/js6-5srod.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etlms99xu"/><path class="js6-5srod"/>`,
		"fallback": "energy-icons:marker-charger-48-bold",
	});
}

export default Component;
