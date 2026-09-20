import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g07fpxb0e.css';
import '../../css/s/sg0iduuow.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="g07fpxb0e"/><path class="sg0iduuow"/></g>`,
		"fallback": "streamline-color:rock-slide-flat",
	});
}

export default Component;
