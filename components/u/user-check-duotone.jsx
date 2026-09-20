import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cf7arub8r.css';
import '../../css/j/j98rpibjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cf7arub8r"/><path class="j98rpibjb"/></g>`,
		"fallback": "keyline-icons:user-check-duotone",
	});
}

export default Component;
