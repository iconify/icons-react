import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylhh2hb1h.css';
import '../../css/l/l3bahwf0v.css';
import '../../css/v/vf_7ex6uo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylhh2hb1h"/><path class="l3bahwf0v"/><path class="vf_7ex6uo"/>`,
		"fallback": "streamline-freehand:mobile-phone-smartphone",
	});
}

export default Component;
