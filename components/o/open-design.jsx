import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inord5bas.css';

const viewBox = {"width":82,"height":82,"top":0.727};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inord5bas"/>`,
		"fallback": "thesvg-color:open-design",
	});
}

export default Component;
