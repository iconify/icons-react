import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m57vhnfot.css';
import '../../css/u/uh_herb_v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="m57vhnfot"/><path class="uh_herb_v"/></g>`,
		"fallback": "cryptocurrency-color:ont",
	});
}

export default Component;
