import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_n7dobql.css';
import '../../css/e/eselt7ksv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_n7dobql"/><path class="eselt7ksv"/>`,
		"fallback": "boxicons:rotate-cw-5-filled",
	});
}

export default Component;
