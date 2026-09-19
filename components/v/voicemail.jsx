import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzxml0eis.css';

const viewBox = {"width":512,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzxml0eis"/>`,
		"fallback": "zmdi:voicemail",
	});
}

export default Component;
