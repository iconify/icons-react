import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik_gqmbru.css';

const viewBox = {"width":384,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik_gqmbru"/>`,
		"fallback": "zmdi:share",
	});
}

export default Component;
