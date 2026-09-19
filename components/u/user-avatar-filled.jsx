import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkwx1nbmk.css';
import '../../css/a/aq4pnbcei.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkwx1nbmk"/><path class="aq4pnbcei"/>`,
		"fallback": "carbon:user-avatar-filled",
	});
}

export default Component;
