import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vbxtdzvhd.css';
import '../../css/w/w3cohccds.css';
import '../../css/o/ow8ez-lyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="vbxtdzvhd"/><path class="w3cohccds wm-shine"/><path class="ow8ez-lyq"/></g>`,
		"fallback": "withicons-kawaii:layout-dashboard",
	});
}

export default Component;
