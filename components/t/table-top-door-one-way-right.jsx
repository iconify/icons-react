import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z66fxfbas.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z66fxfbas"/>`,
		"fallback": "memory:table-top-door-one-way-right",
	});
}

export default Component;
