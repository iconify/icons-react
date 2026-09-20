import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a78n3_bia.css';
import '../../css/r/ry-wgzbnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a78n3_bia"/><path class="ry-wgzbnw"/></g>`,
		"fallback": "streamline-ultimate:messages-bubble-disable",
	});
}

export default Component;
