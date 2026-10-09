import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8_cvzaik.css';
import '../../css/y/yhfvti82b.css';
import '../../css/y/y6rvtrb9p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8_cvzaik"/><path class="yhfvti82b"/><path class="y6rvtrb9p"/>`,
		"fallback": "energy-icons:jerrycan-20-bold",
	});
}

export default Component;
