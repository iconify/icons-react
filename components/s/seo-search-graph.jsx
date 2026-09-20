import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t2_t85bfj.css';
import '../../css/b/bzpxy1cwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="t2_t85bfj"/><path class="bzpxy1cwo"/></g>`,
		"fallback": "streamline-freehand-color:seo-search-graph",
	});
}

export default Component;
