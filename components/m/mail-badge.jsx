import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jhqy64-ot.css';
import '../../css/p/p7zfiqbfg.css';
import '../../css/h/hguh4oa0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jhqy64-ot"/><path class="p7zfiqbfg"/><circle class="hguh4oa0v"/></g>`,
		"fallback": "lucide:mail-badge",
	});
}

export default Component;
