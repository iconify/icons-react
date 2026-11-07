import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4s4u8b9z.css';
import '../../css/o/ortpaq31n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4s4u8b9z"/><path class="ortpaq31n"/>`,
		"fallback": "solar:text-cross-bold-duotone",
	});
}

export default Component;
