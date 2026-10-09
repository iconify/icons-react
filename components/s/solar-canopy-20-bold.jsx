import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtet-k65m.css';
import '../../css/a/an9q9g7yw.css';
import '../../css/f/fxx-u-bxj.css';
import '../../css/s/sqxdqpa1f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtet-k65m"/><path class="an9q9g7yw"/><path class="fxx-u-bxj"/><path class="sqxdqpa1f"/>`,
		"fallback": "energy-icons:solar-canopy-20-bold",
	});
}

export default Component;
