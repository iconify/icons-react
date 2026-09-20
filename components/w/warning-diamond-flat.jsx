import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dsmm5nbuh.css';
import '../../css/h/hm0k__b5a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dsmm5nbuh"/><path class="hm0k__b5a"/></g>`,
		"fallback": "streamline-plump-color:warning-diamond-flat",
	});
}

export default Component;
