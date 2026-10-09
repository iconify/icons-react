import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsqrtwbgr.css';
import '../../css/y/y3ygpgbwz.css';
import '../../css/e/eia-tm77s.css';
import '../../css/f/fd646mbuc.css';
import '../../css/e/ehc07rbtk.css';
import '../../css/g/gdzsnomjv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsqrtwbgr"/><path class="y3ygpgbwz"/><path class="eia-tm77s"/><path class="fd646mbuc"/><path class="ehc07rbtk"/><path class="gdzsnomjv"/>`,
		"fallback": "energy-icons:solar-panel-alert-20-bold",
	});
}

export default Component;
