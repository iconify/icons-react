import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqohm2nbn.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqohm2nbn"/>`,
		"fallback": "fa6-solid:umbrella-beach",
	});
}

export default Component;
