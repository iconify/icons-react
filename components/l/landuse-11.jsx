import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/om_becc8n.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="om_becc8n"/>`,
		"fallback": "maki:landuse-11",
	});
}

export default Component;
