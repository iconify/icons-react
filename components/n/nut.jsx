import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/b78zgt2fl.css';
import '../../css/p/pbq-lun4p.css';
import '../../css/s/smitfpbcd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="b78zgt2fl"/><path class="pbq-lun4p"/><path class="smitfpbcd"/></g>`,
		"fallback": "icon-park:nut",
	});
}

export default Component;
