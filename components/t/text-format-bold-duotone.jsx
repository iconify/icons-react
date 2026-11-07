import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulrix6h0r.css';
import '../../css/o/opnueljba.css';
import '../../css/t/t7w90pktp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulrix6h0r"/><path class="opnueljba"/><path class="t7w90pktp"/>`,
		"fallback": "solar:text-format-bold-duotone",
	});
}

export default Component;
