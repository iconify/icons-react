import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wiaxfabid.css';
import '../../css/d/dpr9gubjx.css';
import '../../css/x/x0-csbbrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wiaxfabid"/><path clip-rule="evenodd" class="dpr9gubjx"/><path class="x0-csbbrw"/>`,
		"fallback": "basil:microphone-off-outline",
	});
}

export default Component;
