import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nphcgbcmt.css';
import '../../css/y/ynsaqab9c.css';
import '../../css/u/uqaz4lb5b.css';
import '../../css/k/ktepy320u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nphcgbcmt"/><path class="ynsaqab9c"/><path class="uqaz4lb5b"/><path class="ktepy320u"/>`,
		"fallback": "solar:screencast-bold-duotone",
	});
}

export default Component;
