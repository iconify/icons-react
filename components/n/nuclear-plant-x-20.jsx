import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ily569bri.css';
import '../../css/w/wegqv6blc.css';
import '../../css/e/ed4mxccbx.css';
import '../../css/e/eqdr87b3l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ily569bri"/><path class="wegqv6blc"/><path class="ed4mxccbx"/><path class="eqdr87b3l"/>`,
		"fallback": "energy-icons:nuclear-plant-x-20",
	});
}

export default Component;
