import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iv908nr8d.css';
import '../../css/b/bu_wj55_z.css';
import '../../css/h/h60q2pbzt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iv908nr8d"/><path class="bu_wj55_z"/><path clip-rule="evenodd" class="h60q2pbzt"/></g>`,
		"fallback": "streamline-plump-color:tune-adjust-volume-flat",
	});
}

export default Component;
