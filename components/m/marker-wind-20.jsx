import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgjp5_b_u.css';
import '../../css/k/kue93s39j.css';
import '../../css/w/wop9ei26x.css';
import '../../css/w/ws7yeeb4j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgjp5_b_u"/><path class="kue93s39j"/><path class="wop9ei26x"/><path class="ws7yeeb4j"/>`,
		"fallback": "energy-icons:marker-wind-20",
	});
}

export default Component;
