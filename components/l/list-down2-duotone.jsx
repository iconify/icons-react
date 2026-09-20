import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rk38egncu.css';
import '../../css/o/oxo2-pbxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rk38egncu"/><path class="oxo2-pbxk"/></g>`,
		"fallback": "reicon:list-down2-duotone",
	});
}

export default Component;
