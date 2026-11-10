import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/o/otm00ebgy.css';
import '../../css/r/rih-h6bmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="otm00ebgy"/><path class="rih-h6bmi"/></g>`,
		"fallback": "matita:tau-capital",
	});
}

export default Component;
