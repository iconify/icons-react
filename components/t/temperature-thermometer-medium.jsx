import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xr_o6v23v.css';
import '../../css/f/f8bre-hrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xr_o6v23v"/><path class="f8bre-hrd"/></g>`,
		"fallback": "streamline-ultimate:temperature-thermometer-medium",
	});
}

export default Component;
