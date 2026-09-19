import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyl65wiih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b zyl65wiih"/>`,
		"fallback": "boxicons:layout-check",
	});
}

export default Component;
