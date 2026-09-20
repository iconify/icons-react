import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/eyqlr6bgu.css';
import '../../css/w/ww4iwb9bz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="eyqlr6bgu"/><path class="ww4iwb9bz"/></g>`,
		"fallback": "streamline-ultimate:smart-watch-square-power",
	});
}

export default Component;
