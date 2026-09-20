import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/t/t2pbxr1sj.css';
import '../../css/y/yqsa81rov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="t2pbxr1sj"/><path class="yqsa81rov"/></g>`,
		"fallback": "streamline-sharp-color:triangle-flag",
	});
}

export default Component;
