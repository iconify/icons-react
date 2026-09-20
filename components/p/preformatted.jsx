import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yztdgircs.css';
import '../../css/h/hwcdu9nye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yztdgircs"/><path vector-effect="non-scaling-stroke" class="hwcdu9nye"/></g>`,
		"fallback": "wordpress:preformatted",
	});
}

export default Component;
