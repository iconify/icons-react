import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvd31abxp.css';
import '../../css/u/uyos10o5j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvd31abxp"/><path class="uyos10o5j"/>`,
		"fallback": "vaadin:spline-chart",
	});
}

export default Component;
