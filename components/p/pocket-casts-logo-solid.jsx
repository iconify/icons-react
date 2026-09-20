import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fmxj0ub7o.css';
import '../../css/p/pyzrjzbgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fmxj0ub7o"/><path class="pyzrjzbgp"/></g>`,
		"fallback": "streamline-logos:pocket-casts-logo-solid",
	});
}

export default Component;
