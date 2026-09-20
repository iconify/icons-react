import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jbe9hb-ly.css';
import '../../css/s/sudgglpna.css';
import '../../css/m/mbuyzmbrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jbe9hb-ly"/><path class="sudgglpna"/><path class="mbuyzmbrn"/></g>`,
		"fallback": "reicon:receipt-add",
	});
}

export default Component;
