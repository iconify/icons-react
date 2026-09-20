import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pg0no1ryl.css';
import '../../css/l/l52m_-ebg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pg0no1ryl"/><path class="l52m_-ebg"/></g>`,
		"fallback": "lsicon:linecap-round-filled",
	});
}

export default Component;
