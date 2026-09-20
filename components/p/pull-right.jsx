import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kq7thcc-d.css';
import '../../css/y/yjeouk7sa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kq7thcc-d"/><path vector-effect="non-scaling-stroke" class="yjeouk7sa"/></g>`,
		"fallback": "wordpress:pull-right",
	});
}

export default Component;
