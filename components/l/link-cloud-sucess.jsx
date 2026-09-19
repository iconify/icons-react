import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/mi2wm9b-w.css';
import '../../css/t/tmqze-b-w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="mi2wm9b-w"/><path class="tmqze-b-w"/></g>`,
		"fallback": "icon-park:link-cloud-sucess",
	});
}

export default Component;
