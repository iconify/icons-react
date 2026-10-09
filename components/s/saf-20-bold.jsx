import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g39s4_i7q.css';
import '../../css/d/dbz_t_b9c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g39s4_i7q"/><path class="dbz_t_b9c"/>`,
		"fallback": "energy-icons:saf-20-bold",
	});
}

export default Component;
