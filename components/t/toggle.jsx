import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l8dg32zox.css';
import '../../css/k/klb8n8byj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l8dg32zox"/><circle class="klb8n8byj"/></g>`,
		"fallback": "reicon:toggle",
	});
}

export default Component;
