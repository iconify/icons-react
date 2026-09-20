import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hd165ibnb.css';
import '../../css/y/yurni7brp.css';
import '../../css/t/to5-9c1tp.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/t/tqzrmzbxt.css';
import '../../css/y/yg0-ehb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hd165ibnb"/><path class="yurni7brp"/><path class="to5-9c1tp"/><g class="p_3zmsvya"><path class="tqzrmzbxt"/><path class="yg0-ehb1i"/></g></g>`,
		"fallback": "tdesign:print",
	});
}

export default Component;
