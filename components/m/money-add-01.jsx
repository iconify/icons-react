import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dgugneb_n.css';
import '../../css/i/ink891bfz.css';
import '../../css/g/gvlki0bhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dgugneb_n"/><path class="ink891bfz"/><path class="gvlki0bhe"/></g>`,
		"fallback": "hugeicons:money-add-01",
	});
}

export default Component;
