import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c2k-m-3ae.css';
import '../../css/b/bh7yztb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c2k-m-3ae"/><path class="bh7yztb1g"/></g>`,
		"fallback": "keyline-icons:message-square-two-tone",
	});
}

export default Component;
