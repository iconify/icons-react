import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rqqwlubai.css';
import '../../css/e/eugy_9b7o.css';

const viewBox = {"width":91,"height":34};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rqqwlubai"/><path class="eugy_9b7o"/></g>`,
		"fallback": "thesvg-color:udemy-light",
	});
}

export default Component;
