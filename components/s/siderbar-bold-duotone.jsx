import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o75u76x7m.css';
import '../../css/u/u0uqtx1rd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o75u76x7m"/><path class="u0uqtx1rd"/>`,
		"fallback": "solar:siderbar-bold-duotone",
	});
}

export default Component;
