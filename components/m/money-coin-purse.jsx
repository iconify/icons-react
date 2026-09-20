import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gq2-qk44g.css';
import '../../css/g/gf5qoqb0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gq2-qk44g"/><path class="gf5qoqb0h"/></g>`,
		"fallback": "streamline-freehand:money-coin-purse",
	});
}

export default Component;
