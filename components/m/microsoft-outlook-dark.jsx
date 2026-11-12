import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt7qbeb9s.css';
import '../../css/i/iozszdcyt.css';
import '../../css/h/h6o6s8bar.css';
import '../../css/a/a66hvfb8z.css';
import '../../css/r/rz_pfy2nl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt7qbeb9s"/><path class="iozszdcyt"/><path class="h6o6s8bar"/><path class="a66hvfb8z"/><path class="rz_pfy2nl"/>`,
		"fallback": "selfhst:microsoft-outlook-dark",
	});
}

export default Component;
