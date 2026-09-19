import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvebwk29s.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvebwk29s"/>`,
		"fallback": "fa-solid:play",
	});
}

export default Component;
