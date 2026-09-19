import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d160gibct.css';
import '../../css/m/misun9bmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d160gibct"/><circle class="misun9bmf"/></g>`,
		"fallback": "hugeicons:user-search-01",
	});
}

export default Component;
