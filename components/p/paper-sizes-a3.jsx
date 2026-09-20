import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x2rludcvs.css';
import '../../css/t/t2nr0tbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x2rludcvs"/><path class="t2nr0tbht"/></g>`,
		"fallback": "streamline-ultimate:paper-sizes-a3",
	});
}

export default Component;
