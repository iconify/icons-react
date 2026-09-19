import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n8cr_8bjz.css';
import '../../css/p/prakunwcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n8cr_8bjz"/><path class="prakunwcw"/></g>`,
		"fallback": "hugeicons:traffic-jam-01",
	});
}

export default Component;
