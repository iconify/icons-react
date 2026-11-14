import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r59t_6bhj.css';
import '../../css/s/sozkddc-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r59t_6bhj"/><path class="sozkddc-m"/></g>`,
		"fallback": "hugeicons:luggage-02",
	});
}

export default Component;
