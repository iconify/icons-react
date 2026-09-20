import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xy90sqb8f.css';
import '../../css/b/bme8xvnwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xy90sqb8f"/><path class="bme8xvnwy"/></g>`,
		"fallback": "stash:social-whatsapp-duotone",
	});
}

export default Component;
