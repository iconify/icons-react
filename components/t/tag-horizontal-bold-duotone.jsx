import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opx7yx7he.css';
import '../../css/e/ecc5nebhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opx7yx7he"/><path class="ecc5nebhy"/>`,
		"fallback": "solar:tag-horizontal-bold-duotone",
	});
}

export default Component;
