import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r9eqvqjtz.css';
import '../../css/r/rrhpnf4gr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r9eqvqjtz"/><path class="rrhpnf4gr"/></g>`,
		"fallback": "reicon:list-arrow-down2-duotone",
	});
}

export default Component;
