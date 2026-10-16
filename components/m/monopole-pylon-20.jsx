import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojf58obzl.css';
import '../../css/z/zi9baroae.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojf58obzl"/><path class="zi9baroae"/>`,
		"fallback": "energy-icons:monopole-pylon-20",
	});
}

export default Component;
