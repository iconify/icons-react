import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adcwh5bvn.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adcwh5bvn"/>`,
		"fallback": "fa6-solid:toilets-portable",
	});
}

export default Component;
