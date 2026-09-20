import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i6c7iebpf.css';
import '../../css/n/nj_cnnypu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i6c7iebpf"/><path class="nj_cnnypu"/></g>`,
		"fallback": "reicon:shield-user",
	});
}

export default Component;
