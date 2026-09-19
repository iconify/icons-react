import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q07-vixib.css';
import '../../css/x/x1_r36phd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="q07-vixib"/><path class="x1_r36phd"/></g>`,
		"fallback": "iconamoon:sign-minus-circle-light",
	});
}

export default Component;
