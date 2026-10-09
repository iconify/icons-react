import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rryjfac1g.css';
import '../../css/y/y8is0jr3c.css';
import '../../css/j/jerqv_bif.css';
import '../../css/w/wj58zybzn.css';
import '../../css/w/wq-p5sbsc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rryjfac1g"/><path class="y8is0jr3c"/><path class="jerqv_bif"/><path class="wj58zybzn"/><path class="wq-p5sbsc"/>`,
		"fallback": "energy-icons:lakeside-cabin-20-bold",
	});
}

export default Component;
