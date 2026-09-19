import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etsqkeb2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etsqkeb2o"/>`,
		"fallback": "boxicons:plus-circle-filled",
	});
}

export default Component;
