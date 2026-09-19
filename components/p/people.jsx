import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tutyhtbtf.css';
import '../../css/l/lvprdxdgh.css';
import '../../css/e/e-1ifub3i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="tutyhtbtf"/><circle class="lvprdxdgh"/><path class="e-1ifub3i"/></g>`,
		"fallback": "charm:people",
	});
}

export default Component;
