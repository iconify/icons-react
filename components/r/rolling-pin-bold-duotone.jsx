import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4mtqv5td.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/t/tnpmw8b7u.css';
import '../../css/e/e8344vbai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4mtqv5td"/><g class="xtpeb-edw"><path class="tnpmw8b7u"/><path class="e8344vbai"/></g>`,
		"fallback": "solar:rolling-pin-bold-duotone",
	});
}

export default Component;
