import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i8r4dm-gs.css';
import '../../css/v/vkhrympri.css';
import '../../css/w/w223ngbym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i8r4dm-gs"/><path class="vkhrympri"/><path class="w223ngbym"/></g>`,
		"fallback": "streamline-ultimate:office-file-graph",
	});
}

export default Component;
