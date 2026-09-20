import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g-lz0u59v.css';
import '../../css/t/tb_7ee5tz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g-lz0u59v"/><path class="tb_7ee5tz"/></g>`,
		"fallback": "tabler:picture-in-picture-top",
	});
}

export default Component;
