import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zye0l-oxa.css';
import '../../css/y/ydrsn1buc.css';
import '../../css/w/wp3kf0bjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="zye0l-oxa"/><path class="ydrsn1buc"/><path class="wp3kf0bjz"/></g>`,
		"fallback": "keyline-icons:tag-horizontal-start-sparkles-sharp-duotone",
	});
}

export default Component;
