import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcnvp-btz.css';
import '../../css/y/ygre9pbqx.css';
import '../../css/t/t75ay3btw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcnvp-btz"/><path class="ygre9pbqx"/><path class="t75ay3btw"/>`,
		"fallback": "energy-icons:spring-balance-20",
	});
}

export default Component;
