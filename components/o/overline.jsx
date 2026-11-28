import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gq7zebc0l.css';
import '../../css/j/jy-weacnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gq7zebc0l"/><path class="jy-weacnj"/></g>`,
		"fallback": "iconaut:overline",
	});
}

export default Component;
