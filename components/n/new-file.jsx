import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nefsff0sz.css';
import '../../css/x/xfmkfpbpg.css';
import '../../css/k/k8l4uezri.css';
import '../../css/f/fsws2ou3v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nefsff0sz"/><path class="xfmkfpbpg"/><path class="k8l4uezri"/><path class="fsws2ou3v"/></g>`,
		"fallback": "streamline-flex-color:new-file",
	});
}

export default Component;
