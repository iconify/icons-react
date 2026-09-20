import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/ajhlcubvy.css';
import '../../css/d/dqh2msbsv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ajhlcubvy"/><path class="dqh2msbsv"/></g>`,
		"fallback": "streamline-color:sort-descending-flat",
	});
}

export default Component;
