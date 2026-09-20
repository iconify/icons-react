import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bydacdcul.css';
import '../../css/d/dtcrrscne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bydacdcul"/><path class="dtcrrscne"/></g>`,
		"fallback": "streamline-ultimate:pregnancy-pregnant",
	});
}

export default Component;
