import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/f/f0edyfj6z.css';
import '../../css/g/gabt82olb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="f0edyfj6z"/><path class="gabt82olb"/></g>`,
		"fallback": "lets-icons:lock-alt",
	});
}

export default Component;
