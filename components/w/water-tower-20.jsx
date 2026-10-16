import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i16ny7bvz.css';
import '../../css/e/e3jspeiln.css';
import '../../css/d/duvqrbc-n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i16ny7bvz"/><path class="e3jspeiln"/><path class="duvqrbc-n"/>`,
		"fallback": "energy-icons:water-tower-20",
	});
}

export default Component;
