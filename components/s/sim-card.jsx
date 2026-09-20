import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wxkf8hbli.css';
import '../../css/b/b9wxn2bik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wxkf8hbli"/><path class="b9wxn2bik"/></g>`,
		"fallback": "mage:sim-card",
	});
}

export default Component;
