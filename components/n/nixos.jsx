import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwj7unb0w.css';
import '../../css/q/q0jqwwdlw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwj7unb0w"/><path class="q0jqwwdlw"/>`,
		"fallback": "selfhst:nixos",
	});
}

export default Component;
