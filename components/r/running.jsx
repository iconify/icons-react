import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b5ksvtvvi.css';
import '../../css/u/u19a-ubtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b5ksvtvvi"/><path class="u19a-ubtd"/></g>`,
		"fallback": "iconoir:running",
	});
}

export default Component;
