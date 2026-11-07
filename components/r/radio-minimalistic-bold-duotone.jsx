import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dciv8jbgc.css';
import '../../css/w/whjsmbcue.css';
import '../../css/k/k1evd3byb.css';
import '../../css/o/o7xbuy6fy.css';
import '../../css/g/gl_7i3byy.css';
import '../../css/d/dyv-s94-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dciv8jbgc"/><path class="whjsmbcue"/><path class="k1evd3byb"/><path class="o7xbuy6fy"/><path class="gl_7i3byy"/><path class="dyv-s94-y"/>`,
		"fallback": "solar:radio-minimalistic-bold-duotone",
	});
}

export default Component;
