import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkaaq9b7k.css';
import '../../css/c/cre3c4s6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkaaq9b7k"/><path clip-rule="evenodd" class="cre3c4s6m"/>`,
		"fallback": "solar:panel-top-close-outline",
	});
}

export default Component;
