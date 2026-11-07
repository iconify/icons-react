import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3n43-bnv.css';
import '../../css/l/lax56ybee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3n43-bnv"/><path class="lax56ybee"/>`,
		"fallback": "solar:trash-bin-minimalistic-2-bold",
	});
}

export default Component;
