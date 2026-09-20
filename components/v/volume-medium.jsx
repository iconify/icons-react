import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rx_e1l.css';
import '../../css/d/dbz4uw.css';
import '../../css/s/so-from-34.css';
import '../../css/d/d-u-uo_p.css';
import '../../css/d/d-5-a1ir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rx_e1l"/><path class="dbz4uw"/>`,
		"fallback": "line-md:volume-medium",
	});
}

export default Component;
