import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ito3gy.css';
import '../../css/i/iw1iew.css';
import '../../css/m/mz7t6h.css';
import '../../css/s/so-from-40.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-stq6uv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ito3gy iw1iew"/><path class="iw1iew mz7t6h"/>`,
		"fallback": "line-md:round-360",
	});
}

export default Component;
