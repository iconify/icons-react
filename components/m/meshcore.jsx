import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xni24ebau.css';
import '../../css/e/emg8bu5vo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xni24ebau"/><path class="emg8bu5vo"/>`,
		"fallback": "selfhst:meshcore",
	});
}

export default Component;
