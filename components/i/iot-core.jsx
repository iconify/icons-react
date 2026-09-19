import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l0ipqugli.css';
import '../../css/r/ray0mzz-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="l0ipqugli"/><path class="ray0mzz-u"/></g>`,
		"fallback": "gcp:iot-core",
	});
}

export default Component;
