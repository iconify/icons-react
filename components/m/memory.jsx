import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zys8fokom.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zys8fokom"/>`,
		"fallback": "fa6-solid:memory",
	});
}

export default Component;
