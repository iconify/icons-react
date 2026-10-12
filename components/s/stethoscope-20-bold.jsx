import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb9gv9bqr.css';
import '../../css/j/jw-5zob1j.css';
import '../../css/l/l2nzezbia.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb9gv9bqr"/><path class="jw-5zob1j"/><path class="l2nzezbia"/>`,
		"fallback": "energy-icons:stethoscope-20-bold",
	});
}

export default Component;
