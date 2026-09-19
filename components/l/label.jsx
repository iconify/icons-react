import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/yb48dqbmb.css';
import '../../css/n/n9p73bndx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="yb48dqbmb"/><rect class="n9p73bndx"/></g>`,
		"fallback": "icon-park:label",
	});
}

export default Component;
