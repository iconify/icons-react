import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hyibnkb0g.css';
import '../../css/y/y177ocpml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hyibnkb0g"/><path class="y177ocpml"/></g>`,
		"fallback": "andrsrxn:recycle",
	});
}

export default Component;
