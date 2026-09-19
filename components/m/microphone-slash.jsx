import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx8hyq68k.css';
import '../../css/v/v3ruk_beo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx8hyq68k"/><path class="v3ruk_beo"/>`,
		"fallback": "boxicons:microphone-slash",
	});
}

export default Component;
