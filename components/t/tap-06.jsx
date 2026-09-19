import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/joa7gb-zd.css';
import '../../css/i/ifv3rhb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="joa7gb-zd"/><path class="ifv3rhb3l"/></g>`,
		"fallback": "hugeicons:tap-06",
	});
}

export default Component;
