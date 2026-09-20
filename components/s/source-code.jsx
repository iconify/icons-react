import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y5h8azfip.css';
import '../../css/g/g61v_cb0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y5h8azfip"/><path class="g61v_cb0b"/></g>`,
		"fallback": "tabler:source-code",
	});
}

export default Component;
