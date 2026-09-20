import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hr07ykbdk.css';
import '../../css/u/uf99npbzf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hr07ykbdk"/><path class="uf99npbzf"/></g>`,
		"fallback": "streamline-color:justice-scale-2-flat",
	});
}

export default Component;
