import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rzgy0fb4f.css';
import '../../css/i/igl8n1bnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rzgy0fb4f"/><path class="igl8n1bnm"/></g>`,
		"fallback": "iconoir:user-bag",
	});
}

export default Component;
