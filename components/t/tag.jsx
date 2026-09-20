import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k6pc56b3v.css';
import '../../css/d/dsacgh5ov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k6pc56b3v"/><circle transform="rotate(-45 7.738 7.738)" class="dsacgh5ov"/></g>`,
		"fallback": "proicons:tag",
	});
}

export default Component;
