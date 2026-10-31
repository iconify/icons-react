import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mq0bpmbna.css';
import '../../css/d/d17n2pbkb.css';
import '../../css/i/iar8gih5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="mq0bpmbna"/><path class="d17n2pbkb"/><path class="iar8gih5e"/></g>`,
		"fallback": "struq:timer",
	});
}

export default Component;
