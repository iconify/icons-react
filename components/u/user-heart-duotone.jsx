import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w0rb6hfmi.css';
import '../../css/s/sbi5_-73i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="w0rb6hfmi"/><path class="sbi5_-73i"/></g>`,
		"fallback": "stash:user-heart-duotone",
	});
}

export default Component;
