import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f75s_sbbx.css';
import '../../css/j/jwe4axb7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f75s_sbbx"/><path class="jwe4axb7c"/></g>`,
		"fallback": "solar:sort-vertical-line-duotone",
	});
}

export default Component;
