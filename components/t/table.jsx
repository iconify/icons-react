import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rlkvfebeg.css';
import '../../css/y/y_p31bbpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rlkvfebeg"/><path class="y_p31bbpa"/></g>`,
		"fallback": "tdesign:table",
	});
}

export default Component;
