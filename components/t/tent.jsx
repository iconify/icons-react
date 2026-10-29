import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7ofx4a3v.css';
import '../../css/p/p3qk7zbod.css';
import '../../css/f/fwmst6b-l.css';
import '../../css/s/stou4fb7a.css';
import '../../css/e/e5jh53qpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7ofx4a3v wm-k"/><path class="p3qk7zbod wm-k"/><path class="fwmst6b-l wm-k"/><path class="stou4fb7a wm-a"/><path class="e5jh53qpk wm-k"/>`,
		"fallback": "withicons-bauhaus:tent",
	});
}

export default Component;
