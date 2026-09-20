import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtj_33k3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtj_33k3w"/>`,
		"fallback": "simple-icons:neo4j",
	});
}

export default Component;
