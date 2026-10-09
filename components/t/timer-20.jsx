import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi_j_db9s.css';
import '../../css/d/dhxs8ubvn.css';
import '../../css/z/zstpfjybv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi_j_db9s"/><path class="dhxs8ubvn"/><path class="zstpfjybv"/>`,
		"fallback": "energy-icons:timer-20",
	});
}

export default Component;
