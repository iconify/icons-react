import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2lx_obiq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2lx_obiq"/>`,
		"fallback": "temaki:mast",
	});
}

export default Component;
