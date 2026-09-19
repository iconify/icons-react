import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/et6j1xbpl.css';
import '../../css/a/a965bccrl.css';
import '../../css/p/p9-zrkb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="et6j1xbpl"/><path class="a965bccrl"/><path class="p9-zrkb4g"/></g>`,
		"fallback": "iconoir:undo-circle",
	});
}

export default Component;
