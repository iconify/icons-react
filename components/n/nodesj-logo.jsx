import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/af8_b-b2s.css';
import '../../css/o/outs05h4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="af8_b-b2s"/><path class="outs05h4p"/></g>`,
		"fallback": "streamline-ultimate:nodesj-logo",
	});
}

export default Component;
