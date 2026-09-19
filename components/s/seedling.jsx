import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvdcz70ga.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvdcz70ga"/>`,
		"fallback": "fa6-solid:seedling",
	});
}

export default Component;
