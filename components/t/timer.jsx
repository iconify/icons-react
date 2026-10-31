import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/dutcirbli.css';
import '../../css/j/jgkg7zb-g.css';
import '../../css/n/n9ukxqbrt.css';
import '../../css/v/vu52rbc-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="dutcirbli wm-shadow"/><path class="jgkg7zb-g wm-shadow"/><path class="n9ukxqbrt"/><path class="vu52rbc-s"/></g>`,
		"fallback": "withicons-brutal:timer",
	});
}

export default Component;
