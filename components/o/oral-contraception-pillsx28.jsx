import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tvpkowb4b.css';
import '../../css/z/zexe3rzye.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tvpkowb4b"/><path class="zexe3rzye"/></g>`,
		"fallback": "healthicons:oral-contraception-pillsx28",
	});
}

export default Component;
