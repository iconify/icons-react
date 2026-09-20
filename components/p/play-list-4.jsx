import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xyxefdb9k.css';
import '../../css/c/csxsy-bui.css';
import '../../css/m/m9u9d1bbb.css';
import '../../css/p/p1x97ub0m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xyxefdb9k"/><path class="csxsy-bui"/><path class="m9u9d1bbb"/><path class="p1x97ub0m"/></g>`,
		"fallback": "streamline-flex-color:play-list-4",
	});
}

export default Component;
