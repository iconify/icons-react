import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xj9tumban.css';
import '../../css/e/eh58vvbtm.css';
import '../../css/p/p9-zrkb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xj9tumban"/><path class="eh58vvbtm"/><path class="p9-zrkb4g"/></g>`,
		"fallback": "iconoir:redo-circle",
	});
}

export default Component;
