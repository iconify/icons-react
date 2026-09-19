import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/ghadklplh.css';
import '../../css/r/r78dksxaf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="ghadklplh"/><path class="r78dksxaf"/></g>`,
		"fallback": "cryptocurrency-color:sc",
	});
}

export default Component;
