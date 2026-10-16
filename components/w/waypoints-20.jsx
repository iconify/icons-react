import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv9_vcbch.css';
import '../../css/g/glyz50bjm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv9_vcbch"/><path class="glyz50bjm"/>`,
		"fallback": "energy-icons:waypoints-20",
	});
}

export default Component;
