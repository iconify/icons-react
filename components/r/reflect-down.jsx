import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/noxn8pb6n.css';
import '../../css/v/vwonsrtri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="noxn8pb6n"/><path class="vwonsrtri"/></g>`,
		"fallback": "streamline-ultimate:reflect-down",
	});
}

export default Component;
