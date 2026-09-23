import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/dwz2oyjim.css';
import '../../css/f/fm1woqt1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="dwz2oyjim"/><path class="fm1woqt1l"/></g>`,
		"fallback": "keyline-icons:message-square-sparkles-sharp",
	});
}

export default Component;
