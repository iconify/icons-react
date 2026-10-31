import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/web-obyff.css';
import '../../css/g/ghr-fk6dg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="web-obyff"/><path class="ghr-fk6dg"/></g>`,
		"fallback": "coolicons:server-duotone-round",
	});
}

export default Component;
