import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ak25ps3qf.css';
import '../../css/r/rh0uhrcgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ak25ps3qf"/><path class="rh0uhrcgf"/></g>`,
		"fallback": "hugeicons:task-edit-01",
	});
}

export default Component;
