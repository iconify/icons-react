import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzprmcg0c.css';
import '../../css/o/otqm0acos.css';
import '../../css/o/oaa-h-w6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzprmcg0c"/><path class="otqm0acos"/><path class="oaa-h-w6m"/>`,
		"fallback": "solar:move-vertical-bold-duotone",
	});
}

export default Component;
