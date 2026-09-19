import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqcv_0rkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqcv_0rkj"/>`,
		"fallback": "grommet-icons:multimedia",
	});
}

export default Component;
