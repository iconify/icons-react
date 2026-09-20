import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t3hohrr9d.css';
import '../../css/s/s8owq2bdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="t3hohrr9d"/><path class="s8owq2bdc"/></g>`,
		"fallback": "reicon:microphone",
	});
}

export default Component;
