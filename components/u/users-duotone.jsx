import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cf7arub8r.css';
import '../../css/b/b791qrbbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cf7arub8r"/><path class="b791qrbbo"/></g>`,
		"fallback": "keyline-icons:users-duotone",
	});
}

export default Component;
