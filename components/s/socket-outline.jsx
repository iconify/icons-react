import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syolcfb-b.css';
import '../../css/z/zze6oyfyz.css';
import '../../css/q/qne0ekbxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="syolcfb-b"/><path class="zze6oyfyz"/><path class="qne0ekbxr"/>`,
		"fallback": "solar:socket-outline",
	});
}

export default Component;
