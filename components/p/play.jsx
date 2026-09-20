import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6dd4tpwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="v6dd4tpwq"/>`,
		"fallback": "wordpress:play",
	});
}

export default Component;
