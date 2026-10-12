import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m08_yltua.css';
import '../../css/x/x6dpybc8s.css';
import '../../css/u/uexsgo8yq.css';
import '../../css/o/ostedib5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m08_yltua"/><path class="x6dpybc8s"/><path class="uexsgo8yq"/><path class="ostedib5u"/></g>`,
		"fallback": "lucide-extended:rose-duotone",
	});
}

export default Component;
