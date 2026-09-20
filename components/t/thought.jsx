import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oet7fpbsg.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oet7fpbsg"/>`,
		"fallback": "lineicons:thought",
	});
}

export default Component;
