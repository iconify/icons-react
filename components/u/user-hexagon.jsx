import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nop6355ep.css';
import '../../css/m/mmld65ztq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nop6355ep"/><path class="mmld65ztq"/></g>`,
		"fallback": "tabler:user-hexagon",
	});
}

export default Component;
