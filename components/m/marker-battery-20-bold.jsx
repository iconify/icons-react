import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hei8_htdz.css';
import '../../css/g/gcj2o3bwk.css';
import '../../css/t/ti5b1xbza.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hei8_htdz"/><path class="gcj2o3bwk"/><path class="ti5b1xbza"/>`,
		"fallback": "energy-icons:marker-battery-20-bold",
	});
}

export default Component;
