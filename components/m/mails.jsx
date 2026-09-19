import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r8hbf0bbc.css';
import '../../css/b/braw9ubfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r8hbf0bbc"/><path class="braw9ubfx"/></g>`,
		"fallback": "hugeicons:mails",
	});
}

export default Component;
