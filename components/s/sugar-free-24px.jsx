import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/legurkb1v.css';
import '../../css/k/kok17bbko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="legurkb1v"/><path class="kok17bbko"/></g>`,
		"fallback": "healthicons:sugar-free-24px",
	});
}

export default Component;
