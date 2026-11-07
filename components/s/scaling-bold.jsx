import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxiuf1b8p.css';
import '../../css/j/jq9qq8bcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxiuf1b8p"/><path class="jq9qq8bcm"/>`,
		"fallback": "solar:scaling-bold",
	});
}

export default Component;
