import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q87emhy3k.css';
import '../../css/t/te199gb7r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="q87emhy3k"/><path class="te199gb7r"/></g>`,
		"fallback": "streamline-flex-color:street-road-flat",
	});
}

export default Component;
