import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx_umsb2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="yx_umsb2d"/>`,
		"fallback": "wordpress:remove-bug",
	});
}

export default Component;
