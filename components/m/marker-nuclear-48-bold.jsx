import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etlms99xu.css';
import '../../css/h/hr-w5-6dr.css';
import '../../css/f/fn-oc8a_o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etlms99xu"/><path class="hr-w5-6dr"/><path class="fn-oc8a_o"/>`,
		"fallback": "energy-icons:marker-nuclear-48-bold",
	});
}

export default Component;
