import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1u1sjbgx.css';
import '../../css/s/sqkdmebni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1u1sjbgx"/><path clip-rule="evenodd" class="sqkdmebni"/>`,
		"fallback": "solar:ssd-square-bold-duotone",
	});
}

export default Component;
