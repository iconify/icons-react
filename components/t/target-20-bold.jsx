import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/q/qm2mzno7e.css';
import '../../css/u/u1bcxg10z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="qm2mzno7e"/><path class="u1bcxg10z"/>`,
		"fallback": "energy-icons:target-20-bold",
	});
}

export default Component;
