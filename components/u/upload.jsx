import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul2plrb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="ul2plrb5m"/>`,
		"fallback": "wordpress:upload",
	});
}

export default Component;
