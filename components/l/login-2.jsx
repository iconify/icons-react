import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y2gd3lbrr.css';
import '../../css/g/gehlxkvdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y2gd3lbrr"/><path class="gehlxkvdw"/></g>`,
		"fallback": "tabler:login-2",
	});
}

export default Component;
