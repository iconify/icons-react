import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq8hp2o_x.css';
import '../../css/o/o3ulf3bpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yq8hp2o_x"/><path class="o3ulf3bpl"/>`,
		"fallback": "token:wbtc",
	});
}

export default Component;
