import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ou9207p9w.css';
import '../../css/n/n7fs0pb-o.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ou9207p9w"/><path class="n7fs0pb-o"/></g>`,
		"fallback": "thesvg-color:polygon",
	});
}

export default Component;
