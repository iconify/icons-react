import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hei8_htdz.css';
import '../../css/t/tyrfmtb0m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hei8_htdz"/><path class="tyrfmtb0m"/>`,
		"fallback": "energy-icons:marker-charger-20-bold",
	});
}

export default Component;
