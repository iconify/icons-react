import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/du-5mnkon.css';
import '../../css/o/o17q8nbkk.css';
import '../../css/e/eawrvo-zk.css';
import '../../css/a/a9qq5obmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="du-5mnkon"/><path class="o17q8nbkk"/><path class="eawrvo-zk"/><path class="a9qq5obmi"/></g>`,
		"fallback": "solar:streets-map-point-line-duotone",
	});
}

export default Component;
