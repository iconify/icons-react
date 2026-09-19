import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q8a9ihsad.css';
import '../../css/b/bixracnsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q8a9ihsad"/><path class="bixracnsz"/></g>`,
		"fallback": "iconoir:tennis-ball-alt",
	});
}

export default Component;
