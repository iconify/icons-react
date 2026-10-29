import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-5id0rms.css';
import '../../css/p/pxnosramj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k x-5id0rms"/><path class="pxnosramj wm-a"/>`,
		"fallback": "withicons-bauhaus:shield-check",
	});
}

export default Component;
