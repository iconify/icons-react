import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcs-u5b0a.css';
import '../../css/k/kf0teob-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcs-u5b0a"/><path class="kf0teob-v"/>`,
		"fallback": "tdesign:mail-filled",
	});
}

export default Component;
