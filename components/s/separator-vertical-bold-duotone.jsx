import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/m/mqqgpebup.css';
import '../../css/j/jl2nx_bki.css';
import '../../css/z/zn204jbmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="mqqgpebup"/><path class="jl2nx_bki"/></g><path class="zn204jbmn"/>`,
		"fallback": "solar:separator-vertical-bold-duotone",
	});
}

export default Component;
