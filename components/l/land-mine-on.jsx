import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd34l8bbv.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd34l8bbv"/>`,
		"fallback": "fa6-solid:land-mine-on",
	});
}

export default Component;
