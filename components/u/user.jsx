import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/d/dqyuhxbem.css';
import '../../css/n/nyh5boz2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="dqyuhxbem"/><ellipse transform="rotate(-90 12 16)" class="nyh5boz2s"/></g>`,
		"fallback": "codex:user",
	});
}

export default Component;
