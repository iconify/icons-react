import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/g/g75mjfbdt.css';
import '../../css/n/n7hxmsv9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="g75mjfbdt"/><path class="n7hxmsv9f"/></g>`,
		"fallback": "streamline-sharp-color:moustache",
	});
}

export default Component;
