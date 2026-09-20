import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tmvvd7bxd.css';
import '../../css/w/w5wuskb3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tmvvd7bxd"/><path class="w5wuskb3k"/></g>`,
		"fallback": "streamline-freehand:performance-presentation-graph",
	});
}

export default Component;
