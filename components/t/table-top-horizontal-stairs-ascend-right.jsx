import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfftsmbos.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfftsmbos"/>`,
		"fallback": "memory:table-top-horizontal-stairs-ascend-right",
	});
}

export default Component;
