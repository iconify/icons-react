import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luh1hccas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="luh1hccas"/>`,
		"fallback": "typcn:link",
	});
}

export default Component;
