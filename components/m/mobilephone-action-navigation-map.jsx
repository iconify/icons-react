import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lk7vgac6v.css';
import '../../css/h/hc9hodbxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lk7vgac6v"/><path class="hc9hodbxl"/></g>`,
		"fallback": "streamline-freehand:mobilephone-action-navigation-map",
	});
}

export default Component;
