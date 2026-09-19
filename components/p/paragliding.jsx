import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gnte0vb9t.css';
import '../../css/j/jc5x3jbdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gnte0vb9t"/><path class="jc5x3jbdt"/></g>`,
		"fallback": "hugeicons:paragliding",
	});
}

export default Component;
