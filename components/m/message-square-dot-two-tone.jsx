import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/ncfvknbzu.css';
import '../../css/v/voi6mmate.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ncfvknbzu"/><path class="voi6mmate"/></g>`,
		"fallback": "keyline-icons:message-square-dot-two-tone",
	});
}

export default Component;
