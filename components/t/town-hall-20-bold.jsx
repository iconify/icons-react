import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3ht3i_xn.css';
import '../../css/n/n--zs0bqk.css';
import '../../css/v/v5pwrda9h.css';
import '../../css/m/m-9fczbok.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3ht3i_xn"/><path class="n--zs0bqk"/><path class="v5pwrda9h"/><path class="m-9fczbok"/>`,
		"fallback": "energy-icons:town-hall-20-bold",
	});
}

export default Component;
