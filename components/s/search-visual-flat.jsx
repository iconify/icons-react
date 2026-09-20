import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xol-cbbri.css';
import '../../css/n/n2x-7op4j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xol-cbbri"/><path class="n2x-7op4j"/></g>`,
		"fallback": "streamline-plump-color:search-visual-flat",
	});
}

export default Component;
