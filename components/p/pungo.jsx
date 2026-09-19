import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tcjerobss.css';
import '../../css/x/x3i_-ac7p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="tcjerobss"/><path class="x3i_-ac7p"/></g>`,
		"fallback": "cryptocurrency-color:pungo",
	});
}

export default Component;
