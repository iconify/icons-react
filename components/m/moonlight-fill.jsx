import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjibmefbt.css';
import '../../css/r/rutj1thmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjibmefbt"/><path class="rutj1thmt"/>`,
		"fallback": "mingcute:moonlight-fill",
	});
}

export default Component;
