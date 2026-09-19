import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ofqdnjbeo.css';
import '../../css/a/apq205dwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ofqdnjbeo"/><path class="apq205dwz"/></g>`,
		"fallback": "hugeicons:megaphone-02",
	});
}

export default Component;
