import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s5zc1vb8y.css';
import '../../css/y/y6rzrobef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s5zc1vb8y"/><path class="y6rzrobef"/></g>`,
		"fallback": "keyline-icons:layers-two-tone",
	});
}

export default Component;
