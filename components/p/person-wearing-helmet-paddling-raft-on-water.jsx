import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hekg713-p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hekg713-p"/>`,
		"fallback": "pinhead:person-wearing-helmet-paddling-raft-on-water",
	});
}

export default Component;
