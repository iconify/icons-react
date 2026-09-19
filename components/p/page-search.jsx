import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gf65d6bwp.css';
import '../../css/h/hypvk6_jb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gf65d6bwp"/><path class="hypvk6_jb"/></g>`,
		"fallback": "iconoir:page-search",
	});
}

export default Component;
