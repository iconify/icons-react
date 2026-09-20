import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7hydcubz.css';
import '../../css/y/y65flgbol.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7hydcubz"/><path class="y65flgbol"/>`,
		"fallback": "iwwa:remove-1d",
	});
}

export default Component;
