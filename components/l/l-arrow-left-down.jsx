import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ifqhwlyab.css';
import '../../css/f/f_pzl9xla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ifqhwlyab"/><path class="f_pzl9xla"/></g>`,
		"fallback": "mage:l-arrow-left-down",
	});
}

export default Component;
