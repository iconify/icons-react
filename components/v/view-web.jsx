import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwr34p2qv.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwr34p2qv"/>`,
		"fallback": "zmdi:view-web",
	});
}

export default Component;
