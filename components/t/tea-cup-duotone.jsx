import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lw6uenbna.css';
import '../../css/c/cb0ircr1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lw6uenbna"/><path class="cb0ircr1g"/></g>`,
		"fallback": "reicon:tea-cup-duotone",
	});
}

export default Component;
