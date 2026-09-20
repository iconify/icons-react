import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hr5_er4wf.css';
import '../../css/g/gss0_xq1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="hr5_er4wf"/><path class="gss0_xq1l"/></g>`,
		"fallback": "reicon:location",
	});
}

export default Component;
