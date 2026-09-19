import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lfz3cd9tt.css';
import '../../css/y/ydh8ahb2d.css';
import '../../css/v/v5hcmt4eu.css';
import '../../css/t/tv5p2iboz.css';
import '../../css/z/zhn5sy-3s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lfz3cd9tt"/><path class="ydh8ahb2d"/><path class="v5hcmt4eu"/><path class="tv5p2iboz"/><path class="zhn5sy-3s"/></g>`,
		"fallback": "healthicons:pills-4-outline",
	});
}

export default Component;
