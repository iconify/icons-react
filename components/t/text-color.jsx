import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o9m90l0ie.css';
import '../../css/f/fdgid2obi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o9m90l0ie"/><rect class="fdgid2obi"/></g>`,
		"fallback": "proicons:text-color",
	});
}

export default Component;
