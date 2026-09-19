import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylnr7y52n.css';
import '../../css/h/hs-lm0b_y.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ylnr7y52n"/><path class="hs-lm0b_y"/>`,
		"fallback": "garden:play-26",
	});
}

export default Component;
