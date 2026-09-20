import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ettd5fq3m.css';
import '../../css/u/uxd2i5bym.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ettd5fq3m"/><path class="uxd2i5bym"/></g>`,
		"fallback": "streamline-plump-color:layer-mask-flat",
	});
}

export default Component;
