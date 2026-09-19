import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q07-vixib.css';
import '../../css/x/x-2izub3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="q07-vixib"/><path class="x-2izub3q"/></g>`,
		"fallback": "iconamoon:sign-times-circle-light",
	});
}

export default Component;
