import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qj1-j9xsl.css';
import '../../css/v/vgoil6b-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qj1-j9xsl"/><path class="vgoil6b-g"/></g>`,
		"fallback": "hugeicons:money-safe",
	});
}

export default Component;
