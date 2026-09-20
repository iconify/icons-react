import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc8nh-b8d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc8nh-b8d"/>`,
		"fallback": "pinhead:stone-arrowhead-top-right",
	});
}

export default Component;
