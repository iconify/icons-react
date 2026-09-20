import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dki4_xbra.css';
import '../../css/w/wyhqiodnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dki4_xbra"/><path class="wyhqiodnd"/></g>`,
		"fallback": "streamline-ultimate:temperature-thermometer-high",
	});
}

export default Component;
