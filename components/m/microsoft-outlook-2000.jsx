import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za41vfpmx.css';
import '../../css/d/dfdvapbhu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za41vfpmx"/><path class="dfdvapbhu"/>`,
		"fallback": "selfhst:microsoft-outlook-2000",
	});
}

export default Component;
