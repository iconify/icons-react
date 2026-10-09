import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/e/ed20mnbov.css';
import '../../css/s/swg_cpy_k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="ed20mnbov"/><path class="swg_cpy_k"/>`,
		"fallback": "energy-icons:radar-20",
	});
}

export default Component;
