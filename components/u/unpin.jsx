import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/si6wlebqx.css';
import '../../css/w/wi7m8_bpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="si6wlebqx"/><path class="wi7m8_bpl"/></g>`,
		"fallback": "struq:unpin",
	});
}

export default Component;
