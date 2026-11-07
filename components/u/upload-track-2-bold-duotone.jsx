import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu1ovcb9x.css';
import '../../css/z/znfc33clb.css';
import '../../css/q/qqc-xhfwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu1ovcb9x"/><path class="znfc33clb"/><path class="qqc-xhfwz"/>`,
		"fallback": "solar:upload-track-2-bold-duotone",
	});
}

export default Component;
