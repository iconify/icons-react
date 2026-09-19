import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/y/yiy1b3n8l.css';
import '../../css/o/o4ouqrbli.css';
import '../../css/x/xy_xzzmno.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="yiy1b3n8l"/><path class="o4ouqrbli"/><circle transform="rotate(-90 13 9)" class="xy_xzzmno"/></g>`,
		"fallback": "icon-park-solid:u-turn-up",
	});
}

export default Component;
