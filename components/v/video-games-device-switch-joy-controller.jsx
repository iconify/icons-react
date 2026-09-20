import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wxnndwbls.css';
import '../../css/x/xz7p6tbng.css';
import '../../css/s/s0trtnb1m.css';
import '../../css/z/zhintvt7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wxnndwbls"/><path class="xz7p6tbng"/><path class="s0trtnb1m"/><path class="zhintvt7v"/></g>`,
		"fallback": "streamline-freehand-color:video-games-device-switch-joy-controller",
	});
}

export default Component;
