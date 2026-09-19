import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nh9m4hbik.css';
import '../../css/p/pzgvajr2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nh9m4hbik"/><path class="pzgvajr2r"/></g>`,
		"fallback": "hugeicons:wall-lamp",
	});
}

export default Component;
