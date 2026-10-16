import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etlms99xu.css';
import '../../css/f/fti4opbqx.css';
import '../../css/e/e0-myro4s.css';
import '../../css/i/i9n-a3bcw.css';
import '../../css/t/t0uexbbdm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etlms99xu"/><path class="fti4opbqx"/><path class="e0-myro4s"/><path class="i9n-a3bcw"/><path class="t0uexbbdm"/>`,
		"fallback": "energy-icons:marker-offshore-wind-48-bold",
	});
}

export default Component;
