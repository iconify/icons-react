import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/drvllbbyr.css';
import '../../css/h/h0b-md9tw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="drvllbbyr"/><path class="h0b-md9tw"/></g>`,
		"fallback": "streamline-ultimate:monetization-touch-coin",
	});
}

export default Component;
