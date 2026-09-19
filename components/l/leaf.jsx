import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/utx-e-b7u.css';
import '../../css/r/rw748ybzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="utx-e-b7u"/><path class="rw748ybzp"/></g>`,
		"fallback": "iconoir:leaf",
	});
}

export default Component;
