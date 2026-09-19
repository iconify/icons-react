import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj6ll6ylr.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj6ll6ylr"/>`,
		"fallback": "fa6-solid:trophy",
	});
}

export default Component;
