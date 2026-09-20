import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/eajct4bds.css';
import '../../css/d/da787ibef.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="eajct4bds"/><path class="da787ibef"/></g>`,
		"fallback": "streamline-color:warehouse-1-flat",
	});
}

export default Component;
