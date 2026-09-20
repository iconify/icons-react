import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a8-8i_b6j.css';
import '../../css/f/fkdpf6eac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a8-8i_b6j"/><path class="fkdpf6eac"/></g>`,
		"fallback": "tabler:settings-bolt",
	});
}

export default Component;
