import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b22cvxy9q.css';
import '../../css/s/sea5vybym.css';
import '../../css/r/raype-70g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b22cvxy9q"/><path class="sea5vybym"/><path class="raype-70g"/></g>`,
		"fallback": "hugeicons:tips",
	});
}

export default Component;
