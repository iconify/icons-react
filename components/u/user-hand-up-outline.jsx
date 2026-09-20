import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dzf2iac6c.css';
import '../../css/a/ac6ripblv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dzf2iac6c"/><path class="ac6ripblv"/></g>`,
		"fallback": "solar:user-hand-up-outline",
	});
}

export default Component;
