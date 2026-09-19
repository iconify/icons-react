import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/o/ou29h-bjq.css';
import '../../css/h/hsmgu8r4l.css';
import '../../css/c/cyfkkj1ox.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="ou29h-bjq"/><ellipse class="hsmgu8r4l"/><path class="cyfkkj1ox"/></g>`,
		"fallback": "icon-park-solid:pumpkin",
	});
}

export default Component;
