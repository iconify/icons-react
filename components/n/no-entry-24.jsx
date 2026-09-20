import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7q23qb2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7q23qb2o"/>`,
		"fallback": "octicon:no-entry-24",
	});
}

export default Component;
