import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da-peabtg.css';
import '../../css/u/udo33x03z.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="da-peabtg"/><path class="udo33x03z"/>`,
		"fallback": "devicon:positron",
	});
}

export default Component;
