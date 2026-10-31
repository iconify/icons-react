import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/af1g7vbbp.css';
import '../../css/w/wf3l4vblf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="af1g7vbbp"/><path class="wf3l4vblf"/></g>`,
		"fallback": "struq:scan",
	});
}

export default Component;
