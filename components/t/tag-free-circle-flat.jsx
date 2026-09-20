import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hcfh5ybiz.css';
import '../../css/o/o8fof7zha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hcfh5ybiz"/><path class="o8fof7zha"/></g>`,
		"fallback": "streamline-sharp-color:tag-free-circle-flat",
	});
}

export default Component;
