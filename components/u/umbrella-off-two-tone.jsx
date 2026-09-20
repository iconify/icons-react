import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y89cpibpf.css';
import '../../css/h/hdthxbcjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y89cpibpf"/><path class="hdthxbcjb"/></g>`,
		"fallback": "keyline-icons:umbrella-off-two-tone",
	});
}

export default Component;
