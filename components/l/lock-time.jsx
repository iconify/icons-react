import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/skdzxpg8m.css';
import '../../css/y/y47qa7but.css';
import '../../css/b/bfmdzqbts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="skdzxpg8m"/><path class="y47qa7but"/><path class="bfmdzqbts"/></g>`,
		"fallback": "tdesign:lock-time",
	});
}

export default Component;
