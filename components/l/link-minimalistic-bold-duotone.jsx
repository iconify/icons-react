import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/a/ar6svccon.css';
import '../../css/c/c6yv8di5i.css';
import '../../css/c/c25go_0_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="ar6svccon"/><path class="c6yv8di5i"/></g><path class="c25go_0_s"/>`,
		"fallback": "solar:link-minimalistic-bold-duotone",
	});
}

export default Component;
