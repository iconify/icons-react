import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cc50cvs0o.css';
import '../../css/x/xcok15bww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cc50cvs0o"/><path class="xcok15bww"/></g>`,
		"fallback": "keyline-icons:square-caret-left",
	});
}

export default Component;
