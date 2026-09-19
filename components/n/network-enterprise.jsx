import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqioeeb_p.css';
import '../../css/r/r1w4d6azy.css';
import '../../css/n/n_x5vvvyy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqioeeb_p"/><path class="r1w4d6azy"/><path class="n_x5vvvyy"/>`,
		"fallback": "carbon:network-enterprise",
	});
}

export default Component;
