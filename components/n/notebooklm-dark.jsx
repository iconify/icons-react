import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz7386bgm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz7386bgm"/>`,
		"fallback": "selfhst:notebooklm-dark",
	});
}

export default Component;
