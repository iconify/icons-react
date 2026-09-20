import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s16nl6bqm.css';
import '../../css/x/xinq97epj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s16nl6bqm"/><path class="xinq97epj"/></g>`,
		"fallback": "keyline-icons:messages-duotone",
	});
}

export default Component;
