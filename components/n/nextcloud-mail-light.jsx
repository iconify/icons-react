import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy6gxbbso.css';
import '../../css/h/hdoub2b9e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy6gxbbso"/><path class="hdoub2b9e"/>`,
		"fallback": "selfhst:nextcloud-mail-light",
	});
}

export default Component;
