import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqroa213o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqroa213o"/>`,
		"fallback": "noviair:shoe",
	});
}

export default Component;
