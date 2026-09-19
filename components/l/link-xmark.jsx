import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m2lbcip5t.css';
import '../../css/n/n8v0i5ock.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m2lbcip5t"/><path class="n8v0i5ock"/></g>`,
		"fallback": "iconoir:link-xmark",
	});
}

export default Component;
