import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/g/g2ejjjb6o.css';
import '../../css/d/d069zccvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="g2ejjjb6o"/><path class="d069zccvx"/></g>`,
		"fallback": "lets-icons:sound-min",
	});
}

export default Component;
