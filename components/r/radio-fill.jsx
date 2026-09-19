import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mfdlwlicq.css';
import '../../css/x/xq6qcpb4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mfdlwlicq"/><path class="xq6qcpb4u"/></g>`,
		"fallback": "ci:radio-fill",
	});
}

export default Component;
