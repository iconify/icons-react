import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4mdq8b_v.css';
import '../../css/y/y5gy4-btr.css';
import '../../css/q/q9zdo8bou.css';
import '../../css/l/lnk_kr56u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4mdq8b_v"/><path class="y5gy4-btr"/><path class="q9zdo8bou"/><path class="lnk_kr56u"/>`,
		"fallback": "energy-icons:mine-water-20",
	});
}

export default Component;
