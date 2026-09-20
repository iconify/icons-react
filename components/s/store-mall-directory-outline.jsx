import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfu6ngbld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfu6ngbld"/>`,
		"fallback": "mdi:store-mall-directory-outline",
	});
}

export default Component;
