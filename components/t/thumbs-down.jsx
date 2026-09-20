import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/euxfh3bvf.css';
import '../../css/s/s-x4hri0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="euxfh3bvf"/><path class="s-x4hri0p"/></g>`,
		"fallback": "mage:thumbs-down",
	});
}

export default Component;
