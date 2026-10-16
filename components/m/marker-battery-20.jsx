import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgjp5_b_u.css';
import '../../css/k/kn2rl6b4x.css';
import '../../css/q/qgz7uvjgg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgjp5_b_u"/><path class="kn2rl6b4x"/><path class="qgz7uvjgg"/>`,
		"fallback": "energy-icons:marker-battery-20",
	});
}

export default Component;
