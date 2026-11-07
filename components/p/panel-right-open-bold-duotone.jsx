import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1nbikbny.css';
import '../../css/h/hd3mzwb_t.css';
import '../../css/y/ydzn23buh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g1nbikbny"/><path class="hd3mzwb_t"/><path class="ydzn23buh"/>`,
		"fallback": "solar:panel-right-open-bold-duotone",
	});
}

export default Component;
