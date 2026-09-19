import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b0e3pdb7d.css';
import '../../css/n/n7ef1uvcq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b0e3pdb7d"/><path class="n7ef1uvcq"/></g>`,
		"fallback": "healthicons:mobile2x-outline",
	});
}

export default Component;
