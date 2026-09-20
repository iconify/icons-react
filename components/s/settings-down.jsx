import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d_eef-bqa.css';
import '../../css/f/fkdpf6eac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d_eef-bqa"/><path class="fkdpf6eac"/></g>`,
		"fallback": "tabler:settings-down",
	});
}

export default Component;
