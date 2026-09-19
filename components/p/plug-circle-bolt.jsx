import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf82jj3qp.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf82jj3qp"/>`,
		"fallback": "fa6-solid:plug-circle-bolt",
	});
}

export default Component;
